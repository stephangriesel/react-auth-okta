import React, { Component } from 'react'

class Members extends Component {
    state = {
        currentUserName:'',
        currentUserEmail:''
    }

    componentDidMount(){
        const idToken = JSON.parse(localStorage.getItem('okta-token-storage'));
        this.setState({
            currentUserEmail: idToken.idToken.claims.email,
            currentUserName: idToken.idToken.claims.name,
            authTime: idToken.idToken.claims.auth_time
        });
    }

  render() {
      const { currentUserEmail, currentUserName, authTime } = this.state;
    return (
        <div>
            <h1>Welcome {currentUserName}</h1>
            <p>Email: {currentUserEmail}</p>
            <p>You are in the members only area</p>
            <h3>You're authorized time: {authTime}</h3>
        </div>
    )
  }
}

export default Members;
