import React from 'react';
import Display from './Display';
import { Redirect } from "react-router-dom";
import AuthService from "../services/auth.service";

export default class API_Call extends React.Component {
    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
          }
      
          const { currentUser } = this.state;
        return (
            <div>
                <button onClick={() => this.callApi()}>
                    Click here to call API
                </button>
                <strong>{currentUser.username}</strong> Profile
            <Display contacts={this.state.contacts} />
            </div>
        )
    }

    state = {
        contacts: [],
        redirect: null,
        userReady: false,
        currentUser: { username: "" }
    };

    componentDidMount() {
        const currentUser = AuthService.getCurrentUser();
    
        if (!currentUser) this.setState({ redirect: "/home" });
        this.setState({ currentUser: currentUser, userReady: true })
      }

    callApi(){ 
            fetch('http://localhost:8080/api/tutorials')
            .then(res => res.json())
            .then((data) => {
                this.setState({ contacts: data })
            })
            .catch(console.log)
    }
    
}