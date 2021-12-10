import axios from 'axios';
import React, { Component } from 'react';
import '../App.css';
import { reactLocalStorage } from 'reactjs-localstorage';

class Register extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            confirmPassword: '',
            errorMessage: '',
            isSubmitted: false
        };
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

        if (this.state.password === this.state.confirmPassword) {
            const data = {
                username: this.state.username,
                password: this.state.password,
                confirmPassword: this.state.confirmPassword
            };
    
            axios.post('/api/auth/login', data).then(response => {
                reactLocalStorage.set('token', response.data.token);
                this.props.history.push('/');
            });
    
            this.setState({ isSubmitted: true });
        }
        else {
            this.setState({ errorMessage: "Passwords don't match." });
        }
    }

    render() {
        document.title = "Login";
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <br />
                        <h1 className="display-4 text-center">Register</h1>
                        <hr />

                        <form noValidate onSubmit={this.onSubmit}>
                            <div className='form-group'>
                                <input
                                    type='text'
                                    placeholder='Username'
                                    name='username'
                                    className='form-control'
                                    value={this.state.username}
                                    onChange={this.onChange}
                                />
                            </div>

                            <div className='form-group'>
                                <input
                                    type='password'
                                    placeholder='Password'
                                    name='password'
                                    className='form-control'
                                    value={this.state.password}
                                    onChange={this.onChange}
                                />
                            </div>

                            <div className='form-group'>
                                <input
                                    type='password'
                                    placeholder='Confirm 3pssword'
                                    name='confirmPassword'
                                    className='form-control'
                                    value={this.state.confirmPassword}
                                    onChange={this.onChange}
                                />
                            </div>

                            <div className='form-group'>
                                <p>{this.state.errorMessage}</p>
                            </div>

                            <input
                                type="submit"
                                className="btn btn-outline-warning btn-block mt-4"
                            />
                        </form>
                        <br />
                        <br />
                    </div>
                </div>
            </div>
        );
    }
};

export default Register;