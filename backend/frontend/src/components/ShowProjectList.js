import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import ProjectContainer from './ProjectContainer';
import MediaQuery from 'react-responsive';

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
    let projectList;

    if (!projects) {
      projectList = "there is no project record!";
    } else {
      projectList = projects.map((project, k) =>
        <div className="container-grid container">
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
            </div>

            <div className="col-md-11">
              <br />
              <hr />
            </div>

          </div>
          <MediaQuery maxWidth={767}>
            <div className="list container-grid1">
              {projectList}
            </div>
          </MediaQuery>
          <MediaQuery minWidth={768}>
            <div className="list container-grid">
              {projectList}
            </div>
          </MediaQuery>
        </div>
      </div>
    );
  }
}

export default ShowProjectList;