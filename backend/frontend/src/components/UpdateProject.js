import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
import { reactLocalStorage } from 'reactjs-localstorage';

class UpdateProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      description: '',
      language: '',
      sourcecode: '',
      published_date: ''
    };
  }

  componentDidMount() {
    const header = {
      headers: {
        'Authorization': reactLocalStorage.get('token')
      }
    }

    axios.post('/api/auth', null, header).then(response => {
      if (response.data.data.user.isAdmin === "true") {
        axios
          .get('/api/projects/' + this.props.match.params.id)
          .then(res => {
            this.setState({
              title: res.data.title,
              author: res.data.author,
              description: res.data.description,
              language: res.data.language,
              sourcecode: res.data.sourcecode,
              androidDownload: res.data.androidDownload,
              iosDownload: res.data.iosDownload,
              computerDownload: res.data.computerDownload,
              status: res.data.status
            })
          })
          .catch(err => {
            console.log("Error from UpdateProject");
          });
      }
      else {
        this.props.history.push('/');
      }
    }).catch(err => {
      this.props.history.push('/');
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  deleteProject = e => {
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
          status: this.state.status
        };

        axios
          .delete('/api/projects/' + this.props.match.params.id, header)
          .then(res => {
            this.props.history.push('/projects');
          })
          .catch(err => {
            console.log("Error in UpdateProject!");
          });
      }
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const header = {
      headers: {
        'Authorization': reactLocalStorage.get('token')
      }
    }

    axios.post('/api/auth', null, header).then(response => {
      if (response.data.data.user) {
        const data = {
          title: this.state.title,
          author: this.state.author,
          description: this.state.description,
          language: this.state.language,
          sourcecode: this.state.sourcecode,
          androidDownload: this.state.androidDownload,
          iosDownload: this.state.iosDownload,
          computerDownload: this.state.computerDownload,
          status: this.state.status
        };

        axios
          .put('/api/projects/' + this.props.match.params.id, data, header)
          .then(res => {
            this.props.history.push('/projects/' + this.props.match.params.id);
          })
          .catch(err => {
            console.log("Error in UpdateProject!");
          });
      }
    });
  };

  render() {
    document.title = "Edit " + this.state.title.toString();
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <br />
            <h1 className="display-4 text-center">Edit Project - {this.state.title}</h1>
            <hr />
          </div>
        </div>

        <div className="col-md-8 m-auto">
          <form noValidate onSubmit={this.onSubmit}>
            <div className='form-group'>
              <label htmlFor="title">Title</label>
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
              <label htmlFor="author">Author</label>
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
              <label htmlFor="description">Description</label>
              <input
                type='text'
                placeholder='Describe this Project'
                name='description'
                className='form-control'
                value={this.state.description}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
              <label htmlFor="language">Programming language</label>
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
              <label htmlFor="sourcecode">Status</label>
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
              <label htmlFor="sourcecode">Source code</label>
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
              <label htmlFor="androidDownload">Android Download</label>
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
              <label htmlFor="iosDownload">IOS Download</label>
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
              <label htmlFor="computerDownload">Computer Download</label>
              <input
                type='text'
                placeholder='Computer download link'
                name='computerDownload'
                className='form-control'
                value={this.state.computerDownload}
                onChange={this.onChange}
              />
            </div>

            <button type="submit" className="btn btn-outline-info btn-lg btn-block">Update Project</button>

            <button onClick={this.deleteProject.bind()} className="btn btn-outline-danger btn-lg btn-block">Delete Project</button>
          </form>
          <br />
          <br />
        </div>
      </div>
    );
  }
}

export default UpdateProject;