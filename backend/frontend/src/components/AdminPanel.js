import React, { Component } from 'react';
import '../App.css';
import CreateProject from './CreateProject';
import 'dotenv';

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

        this.setState({ isSubmitted: true });
    }

    render() {
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
                                        type='text'
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
                    this.state.username == process.env.ADMINNICK && this.state.password == process.env.ADMINPASSWORD && this.state.isSubmitted && <CreateProject />
                }
            </div>
        );
    }
};

export default AdminPanel;