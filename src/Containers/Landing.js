import React, { Component } from "react";
import AboutModal from "../Components/AboutModal";
import vid from "../images/wine_seq2.mp4";
import vlogo from "../images/vlogo_new_t.png";
import Login from "../Components/Login";
import './index.css'

class Landing extends Component {
  state = {
    modal: false,
  };

  selectModal = (info) => {
    this.setState({ modal: !this.state.modal }); // true/false toggle
  };

  render() {
    return (
      <div className="landing">
        <div className="videoContainer">
          <div className="overlay"></div>
          <video autoPlay loop muted>
            <source src={vid} type="video/mp4"></source>
            {/* <source src="http://inserthtml.com/demos/javascript/background-videos/flowers.webm" type="video/webm" /> */}
          </video>
          <div className="login">
            <Login
              postUser={this.props.postUser}
              setCurrentUser={this.props.setCurrentUser}
              users={this.props.users}
            />
          </div>
          <h1 className="title">
            Welcome <code className="title_code"></code>
          </h1>

          <p className="description">
            Join The Waiting List!
            <br />
            <input type="text"></input>
            <br />
            <button style={{backgroundColor: 'grey'}}>Submit</button>
          </p>

          <div className="about">
            <button onClick={this.selectModal}>about</button>
            <AboutModal
              displayModal={this.state.modal}
              closeModal={this.selectModal}
            />
          </div>
          <div className="logo">
            <img src={vlogo} alt="logo" />
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
