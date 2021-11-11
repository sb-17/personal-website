import React, { Component } from 'react';
import '../App.css';

class About extends Component {
    render() {
        document.title = "About";
        return (
            <div className="About">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <br />
                            <h2 className="display-4 text-center">About me</h2>
                            <hr /> <br />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;