import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { reactLocalStorage } from 'reactjs-localstorage';
import Button from 'react-bootstrap/Button';
import FileUpload from './FileUpload';
import FilesList from './FilesList';

class AdminPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFileUpload: false,
      showFilesList: false
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

  render() {
    document.title = "Admin Panel";
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <br />
            <h1 className="display-4 text-center">Admin Panel</h1>
            <hr />
            <center><Button variant="secondary" onClick={() => this.setState({ showFileUpload: !this.state.showFileUpload })}>File upload</Button></center>
            <br />
            {
              this.state.showFileUpload &&
              <div>
                <FileUpload />
                <br />
              </div>
            }
            <center><Button variant="secondary" onClick={() => this.setState({ showFilesList: !this.state.showFilesList })}>Files list</Button></center>
            <br />
            {
              this.state.showFilesList &&
              <div>
                <FilesList />
                <br />
              </div>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default AdminPanel;