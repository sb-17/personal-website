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
              <br />
            </div>

          </div>
          <MediaQuery maxWidth={699}>
            <div className="list container-grid4">
              {projectList}
              <div className="project-container">
                <div className="desc">
                  <h2>
                    <h4>fghgfhfgh | fghgfhgh</h4>
                  </h2>
                  <br />
                  <p>fghfghghfhfg</p>
                  <br />
                  <p>fghfghhgfgh</p>
                </div>
              </div>
              <div className="project-container">
                <div className="desc">
                  <h2>
                    <h4>fghgfhfgh | fghgfhgh</h4>
                  </h2>
                  <br />
                  <p>fghfghghfhfg</p>
                  <br />
                  <p>fghfghhgfgh</p>
                </div>
              </div>
            </div>
          </MediaQuery>
          <MediaQuery minWidth={700} maxWidth={985}>
            <div className="list container-grid4">
              {projectList}
              <div className="project-container">
                <div className="desc">
                  <h2>
                    <h4>fghgfhfgh | fghgfhgh</h4>
                  </h2>
                  <br />
                  <p>fghfghghfhfg</p>
                  <br />
                  <p>fghfghhgfgh</p>
                </div>
              </div>
              <div className="project-container">
                <div className="desc">
                  <h2>
                    <h4>fghgfhfgh | fghgfhgh</h4>
                  </h2>
                  <br />
                  <p>fghfghghfhfg</p>
                  <br />
                  <p>fghfghhgfgh</p>
                </div>
              </div>
            </div>
          </MediaQuery>
          <MediaQuery minWidth={986} maxWidth={1300}>
            <div className="list container-grid4">
              {projectList}
              <div className="project-container">
                <div className="desc">
                  <h2>
                    <h4>fghgfhfgh | fghgfhgh</h4>
                  </h2>
                  <br />
                  <p>fghfghghfhfg</p>
                  <br />
                  <p>fghfghhgfgh</p>
                </div>
              </div>
              <div className="project-container">
                <div className="desc">
                  <h2>
                    <h4>fghgfhfgh | fghgfhgh</h4>
                  </h2>
                  <br />
                  <p>fghfghghfhfg</p>
                  <br />
                  <p>fghfghhgfgh</p>
                </div>
              </div>
            </div>
          </MediaQuery>
          <MediaQuery minWidth={1301}>
            <div className="list container-grid4">
              {projectList}
              <div className="project-container">
                <div className="desc">
                  <h2>
                    <h4>fghgfhfgh | fghgfhgh</h4>
                  </h2>
                  <br />
                  <p>fghfghghfhfg</p>
                  <br />
                  <p>fghfghhgfgh</p>
                </div>
              </div>
              <div className="project-container">
                <div className="desc">
                  <h2>
                    <h4>fghgfhfgh | fghgfhgh</h4>
                  </h2>
                  <br />
                  <p>fghfghghfhfg</p>
                  <br />
                  <p>fghfghhgfgh</p>
                </div>
              </div>
              <div className="project-container">
                <div className="desc">
                  <h2>
                    <h4>fghgfhfgh | fghgfhgh</h4>
                  </h2>
                  <br />
                  <p>fghfghghfhfg</p>
                  <br />
                  <p>fghfghhgfgh</p>
                </div>
              </div>
              <div className="project-container">
                <div className="desc">
                  <h2>
                    <h4>fghgfhfgh | fghgfhgh</h4>
                  </h2>
                  <br />
                  <p>fghfghghfhfg</p>
                  <br />
                  <p>fghfghhgfgh</p>
                </div>
              </div>
              <div className="project-container">
                <div className="desc">
                  <h2>
                    <h4>fghgfhfgh | fghgfhgh</h4>
                  </h2>
                  <br />
                  <p>fghfghghfhfg</p>
                  <br />
                  <p>fghfghhgfgh</p>
                </div>
              </div>
            </div>
          </MediaQuery>
        </div>
      </div>
    );
  }
}

export default ShowProjectList;