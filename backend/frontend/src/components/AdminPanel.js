import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { reactLocalStorage } from 'reactjs-localstorage';

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
          </div>
        </div>
      </div>
    );
  }
}

export default AdminPanel;