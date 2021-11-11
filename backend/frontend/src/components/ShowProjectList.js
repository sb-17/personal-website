import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import ProjectContainer from './ProjectContainer';

class ShowProjectList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
  }

  componentDidMount() {
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
              <hr /> <br />
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