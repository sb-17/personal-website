import React, { Component } from 'react';
import '../App.css';

class Home extends Component {
  render() {
    document.title = "Home";
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <br />
            <h2 className="display-4 text-center">Welcome</h2>
            <hr />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;