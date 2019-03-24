/*global FB*/
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import { Redirect } from 'react-router';

const logOutStyle = {
  background: "transparent",
  border: "none",
  color: "white",
  cursor: "pointer"
}

const navStyle = {
  position: "fixed",
  top: 0,
  width: "100%",
  display: "block",
  boxShadow: "1px 3px 1px #4267b2",
  backgroundColor: "#4267b2"
};

const profileStyle = {
  width: "90%",
  display: "inline-block",
};

const nameStyle = {
  display: "inline-block",
  paddingTop: "10px",
  paddingLeft: "10px",
  float: "left",
  fontFamily: "inherit",
  color: "white",
};

const imgStyle = {
  borderRadius: "100%",
  border: '2px solid #4267b2',
  width: "75px",
  float: "left",
  display: "inline-block",
  marginLeft: "10px"
};


class User extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
    if(!localStorage.getItem('fbToken')){
      // Ask user to log in
      this.facebookLogin();
    }
    else{
      FB.api(`/me?access_token=${localStorage.getItem('fbToken')}`, 'GET', {fields: 'first_name,last_name,name,id,picture.width(150).height(150)'}, (userDetails) => {
        debugger
        if(userDetails.error){
          this.facebookLogin();
        }
        else{
          this.props.setUser(userDetails);
          var linkBtn = document.getElementById('albumLink');
          linkBtn.click();
        }
        console.log('Good to see you, ' + userDetails.name + '.');
      });
    }
  }

  facebookLogin(){
    FB.login((response) => {
      if (response.authResponse) {
        localStorage.setItem('fbToken', response.authResponse.accessToken)
        console.log('Welcome!  Fetching your information.... ');
        FB.api('/me', 'GET', {fields: 'first_name,last_name,name,id,picture.width(150).height(150)'}, (userDetails) => {
          localStorage.setItem('userID', userDetails.id)
          this.props.setUser(userDetails);
          console.log('Good to see you, ' + userDetails.name + '.');
          var linkBtn = document.getElementById('albumLink');
          linkBtn.click();
        });
      } else {
        console.log('User cancelled login or did not fully authorize.');
      }
    },{scope: 'email,user_friends,user_photos'});
  }

  logOut(){
      // user is now logged out
      localStorage.removeItem("userID");
      localStorage.removeItem("fbToken");
      this.props.removeUser();
  }

  render() {
    return (
    <div style={navStyle}>
      <div style={profileStyle}>
        <img style={imgStyle} src={this.props.user[0] ? this.props.user[0].cover : ""} />
        <h3 style={nameStyle}>{this.props.user[0] ? this.props.user[0].name : ""}</h3>
      </div>
      <button style={logOutStyle} onClick={() => this.logOut()}>{this.props.user[0] ? "Log Out" : ""}</button>
      <Link id="albumLink" style={{display:"none"}} to={`/albums`} >Albums</Link>
      <Link id="homeLink" style={{display:"none"}} to={`/`} >Home</Link>
    </div>)
  }
}


User.propTypes = {
    user: PropTypes.any.isRequired,
    setUser: PropTypes.func.isRequired,
    removeUser: PropTypes.func.isRequired
}

export default User