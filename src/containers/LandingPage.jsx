import React, {Component} from 'react';

class LandingPage extends Component {

  render() {
    const { setLoggedInTrue } = this.props;  // NOTE: same as -> const setLoggedInTrue = this.props.setLoggedInTrue;
    return (
      <div className="col-md-2 col-sm-4 col-xs-6">
        not logged in...
        <button onClick={setLoggedInTrue}>
          Please login indeed...
        </button>
        <br/>
        <div width="100%">
          <img src="hero.png" /><img src="dotus.png" />
        </div>
        <div className="">
          Maybe an elaborate video will go here...
        </div>

        {/* <footer className="login-registration-bar">
          hi
        </footer> */}
      </div>
    );
  }
}

export default LandingPage;
