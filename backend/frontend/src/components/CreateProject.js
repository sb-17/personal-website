import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';
import moment from 'moment';

class CreateProject extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      author: '',
      description: '',
      language: '',
      sourcecode: '',
      published_date: '',
      status: ''
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      title: this.state.title,
      author: this.state.author,
      description: this.state.description,
      language: this.state.language,
      sourcecode: this.state.sourcecode,
      published_date: moment().format("DD/MM/YYYY"),
      status: "In development"
    };

    axios
      .post('http://localhost:8082/api/projects', data)
      .then(res => {
        this.setState({
          title: '',
          author: '',
          description: '',
          language: '',
          sourcecode: '',
          published_date: '',
          status: ''
        })
        this.props.history.push('/projects');
      })
      .catch(err => {
        console.log("Error in CreateProject!");
      })
  };

  render() {
    return (
      <div className="CreateProject">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Project</h1>
              <p className="lead text-center">
                Create new project
              </p>

              <form noValidate onSubmit={this.onSubmit}>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Title of the Project'
                    name='title'
                    className='form-control'
                    value={this.state.title}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Author'
                    name='author'
                    className='form-control'
                    value={this.state.author}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Describe this project'
                    name='description'
                    className='form-control'
                    value={this.state.description}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Programming language'
                    name='language'
                    className='form-control'
                    value={this.state.language}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Source code'
                    name='sourcecode'
                    className='form-control'
                    value={this.state.sourcecode}
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
      </div>
    );
  }
}

export default CreateProject;