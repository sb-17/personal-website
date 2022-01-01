import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import download from 'downloadjs';

class ShowProjectDetails extends Component {
  componentDidMount() {
    axios.get('/api/files/download/' + this.props.match.params.projectTitle + '/' + this.props.match.params.version).then(res => {
      const split = res.headers.path.split('/');
      const filename = split[split.length - 1];
      return download(res.data, filename, res.headers.mimetype);
    }).catch(err => {
      console.log("Error from FilePage");
    });
  };

  render() {
      return (
          <div></div>
      )
  }
}

export default ShowProjectDetails;