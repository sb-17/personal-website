import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

class ShowProjectDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: {}
    };
  }

  componentDidMount() {
    axios
      .get('/api/projects/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          project: res.data
        })
      })
      .catch(err => {
        console.log("Error from ShowProjectDetails");
      })
  };

  render() {
    const project = this.state.project;
    let ProjectItem = <div>
      <table className="table table-hover table-dark">
        <tbody>
          <tr>
            <th scope="row"></th>
            <td>Title</td>
            <td>{project.title}</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Author</td>
            <td>{project.author}</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Published Date</td>
            <td>{project.published_date}</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Description</td>
            <td>{project.description}</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Programming language</td>
            <td>{project.language}</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Status</td>
            <td>{project.status} </td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Source code</td>
            <td>
              <Link to={{ pathname: project.sourcecode }} target="_blank">{project.sourcecode}</Link>
            </td>
          </tr>
          {
            project.download != null &&
            <tr>
              <th scope="row"></th>
              <td>Download link</td>
              <td>
                <Link to={{ pathname: project.download }} target="_blank">{project.download}</Link>
              </td>
            </tr>
          }
        </tbody>
      </table>
    </div>

    return (
      <div className="ShowProjectDetails">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <h1 className="display-4 text-center">{project.title}</h1>
              <hr /> <br />
            </div>
          </div>
          <div>
            {ProjectItem}
          </div>
        </div>
      </div>
    );
  }
}

export default ShowProjectDetails;