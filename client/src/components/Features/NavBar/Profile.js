import React, { Component } from "react";
import jwt_decode from "jwt-decode";
import UserPage from "../../MainPages/UserPage";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: "",
      email: ""
    };
  }
  // session token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3RfbmFtZSI6IllvdW5nIiwibGFzdF9uYW1lIjoiQ2hvIiwiZW1haWwiOiJ5b3VuZ3RhZTEzODZAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkcDlvL1ZhdzN3RjdyUlE1b0hYakpsT0Jmbk1sNVBCWXdMendnM2ZLMkd3RElEeXRwWG1xbW0iLCJjcmVhdGVkIjoiMjAxOS0wNS0wNCIsImlhdCI6MTU1Njk1Mjg4MSwiZXhwIjoxNTU2OTU0MzIxfQ.sDALvFS9UIzKL9BGZbpCgv-sMZHVHht26VvWi5UaH5Y
  componentDidMount() {
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    this.setState({
      first_name: decoded.first_name,
      last_name: decoded.last_name,
      email: decoded.email
    });
  }

  render() {
    return (
      <div className="jumbotron mt-5">
        <UserPage />
      </div>
    );
  }
}

export default Profile;
