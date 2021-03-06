import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { reactLocalStorage } from 'reactjs-localstorage';

class CreateProject extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      author: '',
      description: '',
      language: '',
      sourcecode: '',
      androidDownload: '',
      iosDownload: '',
      computerDownload: '',
      published_date: '',
      status: ''
    };
  }

  componentDidMount() {
    const header = {
      headers: {
        'Authorization': reactLocalStorage.get('token')
      }
    }

    axios.post('/api/auth', null, header).then(response => {
      if (response.data.data.user.isAdmin === "false") {
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

    const header = {
      headers: {
        'Authorization': reactLocalStorage.get('token')
      }
    }

    axios.post('/api/auth', null, header).then(response => {
      if (response.data.data.user.isAdmin === "true") {
        const data = {
          title: this.state.title,
          author: this.state.author,
          description: this.state.description,
          language: this.state.language,
          sourcecode: this.state.sourcecode,
          androidDownload: this.state.androidDownload,
          iosDownload: this.state.iosDownload,
          computerDownload: this.state.computerDownload,
          published_date: this.state.published_date,
          status: this.state.status
        };

        axios
          .post('/api/projects', data, header)
          .then(res => {
            this.setState({
              title: '',
              author: '',
              description: '',
              language: '',
              sourcecode: '',
              published_date: '',
              status: '',
              androidDownload: '',
              iosDownload: '',
              computerDownload: ''
            });
          })
          .catch(err => {
            console.log("Error in CreateProject!");
          })
      }
    });
  };

  render() {
    document.title = "Create Project";
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <br />
            <h1 className="display-4 text-center">Add Project</h1>
            <hr />

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
                  placeholder='Date'
                  name='published_date'
                  className='form-control'
                  value={this.state.published_date}
                  onChange={this.onChange}
                />
              </div>

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Status'
                  name='status'
                  className='form-control'
                  value={this.state.status}
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

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Android download link'
                  name='androidDownload'
                  className='form-control'
                  value={this.state.androidDownload}
                  onChange={this.onChange}
                />
              </div>

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='IOS download link'
                  name='iosDownload'
                  className='form-control'
                  value={this.state.iosDownload}
                  onChange={this.onChange}
                />
              </div>

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Computer download link'
                  name='computerDownload'
                  className='form-control'
                  value={this.state.computerDownload}
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
    );
  }
}

export default CreateProject;