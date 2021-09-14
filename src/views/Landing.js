import React, {Component} from 'react';
import Contacts from './Contacts';

export default class Landing extends Component {
    render() {
        return (
            <div>
                <button onClick={() => this.callApi()}>
                    Click here to call API
                </button>
            <Contacts contacts={this.state.contacts} />
            </div>
        )
    }

    state = {
        contacts: []
    };

    callApi(){ 
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then((data) => {
                this.setState({ contacts: data })
            })
            .catch(console.log)
    }
    
}