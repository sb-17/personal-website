import axios from 'axios';
import React, { Component } from 'react';
import '../App.css';
import CreateProject from './CreateProject';
import { reactLocalStorage } from 'reactjs-localstorage';
require('dotenv').config();

class AdminPanel extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            isSubmitted: false
        };
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

        const data = {
            username: this.state.username,
            password: this.state.password
        };

        axios.post('/api/auth/login', data).then(response => {
            reactLocalStorage.set('token', response.data.token);
        });

        this.setState({ isSubmitted: true });
    }

    render() {
        document.title = "Admin Panel";
        return (
            <div className="CreateProject">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Admin Panel</h1>

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

                                <input
                                    type="submit"
                                    className="btn btn-outline-warning btn-block mt-4"
                                />
                            </form>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                {
                    this.state.username === process.env.REACT_APP_ADMINNICK && this.state.password === process.env.REACT_APP_ADMINPASSWORD && this.state.isSubmitted && <CreateProject />
                }
            </div>
        );
    }
};

export default AdminPanel;