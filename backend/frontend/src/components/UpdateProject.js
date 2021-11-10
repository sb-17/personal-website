import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
import moment from 'moment';

class UpdateProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      description: '',
      language:'',
      sourcecode:'',
      published_date: ''
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:8082/api/projects/'+this.props.match.params.id)
      .then(res => {
        this.setState({
          title: res.data.title,
          author: res.data.author,
          description: res.data.description,
          language: res.data.language,
          sourcecode: res.data.sourcecode,
          published_date: res.data.published_date,
          status: res.data.status
        })
      })
      .catch(err => {
        console.log("Error from UpdateProject");
      })
  };

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
      status: this.state.status
    };

    axios
      .put('http://localhost:8082/api/projects/'+this.props.match.params.id, data)
      .then(res => {
        this.props.history.push('/show-project/'+this.props.match.params.id);
      })
      .catch(err => {
        console.log("Error in UpdateProject!");
      })
  };

  render() {
    const statusSelectOptions = [
      { value: 'indevelopment', label: 'In development' },
      { value: 'paused', label: 'Paused' },
      { value: 'finished', label: 'Finished' }
    ]

    var currentStatus = statusSelectOptions[0];
    if(this.state.status === statusSelectOptions[1]) {
      currentStatus = statusSelectOptions[1];
    }
    else if(this.state.status === statusSelectOptions[2]) {
      currentStatus = statusSelectOptions[2];
    }

    return (
      <div className="UpdateProject">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br/>
              <h1 className="display-4 text-center">Edit Project</h1>
              <br/>
              <br/>
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
            <label htmlFor="status">Status</label>
              <input
                type='text'
                placeholder='Status'
                name='status'
                className='form-control'
                value={this.state.status}
                onChange={this.onChange}
              />
              {/* <Select options={statusSelectOptions}
                name='status'
                value={currentStatus}
                onChange={this.onChange, currentStatus = this.state.status}
              /> */}
            </div>

            <button type="submit" className="btn btn-outline-info btn-lg btn-block">Update Project</button>
            </form>
          </div>

        </div>
      </div>
    );
  }
}

export default UpdateProject;