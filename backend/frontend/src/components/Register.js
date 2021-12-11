import axios from 'axios';
import React, { Component } from 'react';
import '../App.css';

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

    componentDidMount() {
        const header = {
          headers: {
            'Authorization': reactLocalStorage.get('token')
          }
        }
    
        axios.post('/api/auth', null, header).then(response => {
          if (response.data.data.user) {
            this.props.history.push('/');
          }
        }).catch(err => {
          this.props.history.push('/');
        });
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

        if (this.state.password === this.state.confirmPassword) {
            const data = {
                username: this.state.username,
                password: this.state.password
            };
    
            axios.post('/api/auth/register', data).then(response => {
                this.props.history.push('/login');
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
                                <center><p>{this.state.errorMessage}</p></center>
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