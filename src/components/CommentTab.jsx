import React, {Component} from 'react'
import TextField from 'material-ui/TextField'
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton'
import axios from 'axios'

export default class CommentTab extends Component {

    state = {
      newComment: '',
      editComment: '',
      commentID: '',
      formState: false,
    }

  // This updates the value on the form
  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({[name]: value})
  }

  // This closes the form if they click outside of the form
  handleFormClose = () => {
    this.setState({formState: false,})
  }

  // This deletes the comment (not sure if I can add this to handleSubmit function)
  deleteComment = (commentID) => {
    axios.delete(`http://0.0.0.0:3000/movies/${this.props.currentMovie.id}/comments/${commentID}`)
    .then((response) => {
      this.setState({newComment: '',})
      this.props.newUserComment(response.data.comments, 'deletedComment')
    })
  }

  // This opens the form and grabs the current comment clicked and the ID
  editCommentForm = (currentComment, commentID) => {
    this.setState({
      formState: true,
      commentID: commentID,
      editComment: currentComment,
    })
  }

  // This handles the query to the server
  handleSubmit = (event) => {
    event.preventDefault()
    let method = 'post'
    let url = `http://0.0.0.0:3000/movies/${this.props.currentMovie.id}/comments`
    let data = {
      user_id: localStorage.userID,
      username: localStorage.username,
      comment: this.state.newComment,
    }

    // This changes the axios call if it is a comment edit
    if (event.target.name === 'editComments') {
      method = 'put'
      url = `http://0.0.0.0:3000/movies/${this.props.currentMovie.id}/comments/${this.state.commentID}`
      data = {comment: this.state.editComment}
    }

    // The axios call depending on the user submission type of comment
    axios({
      method: method,
      url: url,
      data: data,
    })
    .then((response) => {
      if (response.data.type === 'comment') {
        this.props.newUserComment(response.data.new_comment, 'newComment')
      } else {
        this.props.newUserComment(response.data.comments, 'editedComment')
      }

      this.setState({
        newComment: '',
        formState: false,
      })
    })
    .catch((error) => {
      console.log(error)
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} name='comments'>

          <TextField className="detailed-card-inputs" hintText='Enter your comment below' floatingLabelText='Comment on this movie:'
            floatingLabelFocusStyle={{color: "white"}}
            underlineFocusStyle={{borderColor: "white"}}
            floatingLabelStyle={{color: "gray"}}
            fullWidth={true}>
            <input onChange={this.handleChange} name='newComment' type='text' value={this.state.newComment} style={{color: "white"}}/>
          </TextField>

        </form>

        {this.props.currentMovieComments.length > 0 ? this.props.currentMovieComments.map((comment, index) => {
          return (
            <div className="comment" key={comment.id}>

              <p key={comment.comment}><span>{comment.username}</span> : {comment.comment}</p>
              {Number(localStorage.userID) === comment.user_id ?
                <div role='presentation'>
                  <button onClick={this.deleteComment.bind(this, comment.id)}>Delete</button>
                  <button onClick={this.editCommentForm.bind(this, comment.comment, comment.id)}>Edit</button>
                    <Dialog
                      title="Edit your comment"
                      modal={false}
                      open={this.state.formState}
                      onRequestClose={this.handleFormClose}
                    >
                      <form onSubmit={this.handleSubmit} name="editComments">
                        <TextField floatingLabelText="Comment" fullWidth={true}>
                          <input onChange={this.handleChange} type="text" name="editComment" value={this.state.editComment} />
                        </TextField>
                        <RaisedButton backgroundColor="black" labelColor="white" label="Change!" type="submit"/>
                      </form>

                    </Dialog>
                </div>
              : null}
            </div>
          )
        }) : 'This movie has no comments just yet. You can be the first to do so!'
        }
      </div>
    )
  }
}
