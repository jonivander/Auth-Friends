import React from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth'; 

class Login extends React.Component {
    state = {
        credentials: {
            name: '',
            age: '',
            email: ''
        }
    }; 

    handleChange = (e) => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    login = (e) => {
        e.preventDefault();
        axiosWithAuth()
            .post('/api/login', this.state.credentials)
            .then((res) => {
                localStorage.setItem('token', res.data.payload);
                this.props.history.push('/protected');
            })
            .catch((err) => console.log(err));
    }

    render() {
        return(
            <div>
                <form onSubmit={this.login}>
                    <input
                        type='text'
                        name='name'
                        value={this.state.credentials.name}
                        onChange={this.handleChange}
                    />
                    <input
                        type='text'
                        name='age'
                        value={this.state.credentials.age}
                        onChange={this.handleChange}
                    />
                    <input
                        type='text'
                        name='email'
                        value={this.state.credentials.email}
                        onChange={this.handleChange}
                    />
                    <button>Log in</button>
                </form>
            </div>
        )
    }
}

export default Login; 