import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import ProjectContainer from './ProjectContainer';
import { reactLocalStorage } from 'reactjs-localstorage';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

class ShowProjectList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      isAdmin: false,
      sort: reactLocalStorage.get('sort')
    };
  }

  componentDidMount() {
    if (reactLocalStorage.get('sort') == null) {
      reactLocalStorage.set('sort', "Title");
    }

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

    this.loadProjects();
  };

  loadProjects = e => {
    axios.get('/api/projects').then(res => {
      if (reactLocalStorage.get('sort') == "Title") {
        this.setState({
          projects: (res.data).sort((a, b) => a.published_date > b.published_date ? 1 : -1)
        })
      }
      else if (reactLocalStorage.get('sort') == "Date") {
        this.setState({
          projects: (res.data).sort((a, b) => new Date(a.published_date.split('/').reverse()) > new Date(b.published_date.split('/').reverse()) ? -1 : 1)
        })
      }
    }).catch(err => {
      console.log('Error from ShowProjectList');
    });
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
  
  onSortSelect = e => {
    reactLocalStorage.set('sort', e);
    this.setState({ sort: e });
    window.location.reload(false);
  }

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
              <center>
                <DropdownButton onSelect={this.onSortSelect} id="dropdown-basic-button" variant="secondary" title={"Sorted by " + this.state.sort}>
                  <Dropdown.Item eventKey="Title">Title</Dropdown.Item>
                  <Dropdown.Item eventKey="Date">Date</Dropdown.Item>
                </DropdownButton>
              </center>
            </div>
            <br />
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