import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import ProjectContainer from './ProjectContainer';
import { reactLocalStorage } from 'reactjs-localstorage';

class ShowProjectList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      isAdmin: false
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
        this.setState({ isAdmin: true });
      }
    });

    axios
      .get('/api/projects')
      .then(res => {
        this.setState({
          projects: res.data
        })
      })
      .catch(err => {
        console.log('Error from ShowProjectList');
      })
  };

  createProject = e => {
    const header = {
      headers: {
        'Authorization': reactLocalStorage.get('token')
      }
    }

    axios.post('/api/auth', null, header).then(response => {
      if (response.data.data.user.isAdmin === "true") {
        this.props.history.push('/create');
      }
    });
  };

  render() {
    const projects = this.state.projects;
    document.title = "Projects";
    let projectList;

    if (!projects) {
      projectList = "there is no project record!";
    } else {
      projectList = projects.map((project, k) =>
        <div className="container">
          <ProjectContainer project={project} key={k} />
        </div>
      );
    }

    return (
      <div className="ShowProjectList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Project List</h2>
              <hr />
              {
                this.state.isAdmin &&
                <button onClick={this.createProject.bind()} className="btn btn-outline-info btn-lg btn-block">Create Project</button>
              }
            </div>
          </div>
          <div className="list">
            {projectList}
          </div>
        </div>
      </div>
    );
  }
}

export default ShowProjectList;