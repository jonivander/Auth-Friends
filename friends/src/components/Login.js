import React from 'react';
import { Form, Input, Button } from 'reactstrap'; 

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
                <Form onSubmit={this.login}>
                    <h2>~Login~</h2>
                    <label>Name: 
                        <Input
                            type='text'
                            name='name'
                            value={this.state.credentials.name}
                            onChange={this.handleChange}
                        />
                    </label>

                    {/* <label>Age: 
                    <Input
                        type='text'
                        name='age'
                        value={this.state.credentials.age}
                        onChange={this.handleChange}
                    />
                    </label> */}

                    <label>Email:
                    <Input
                        type='text'
                        name='email'
                        value={this.state.credentials.email}
                        onChange={this.handleChange}
                    />
                    </label>
                    <Button color='info'>Log in</Button>
                </Form>
            </div>
        )
    }
}

export default Login; 