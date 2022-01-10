import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { reactLocalStorage } from 'reactjs-localstorage';
import CommentContainer from './CommentContainer';
import moment from 'moment';
import spacerunlogo from './images/spacerunlogo.png';
import squareitoutlogo from './images/squareitoutlogo.png';
import trainmathlogo from './images/trainmathlogo.png';

class ShowProjectDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: {},
      comments: [],
      isAdmin: false,
      description: '',
      loggedIn: false
    };
  }

  componentDidMount() {
    this.setState({ comments: [] });

    const header = {
      headers: {
        'Authorization': reactLocalStorage.get('token')
      }
    }

    axios.post('/api/auth', null, header).then(response => {
      if (response.data.data.user.isAdmin === "true") {
        this.setState({ isAdmin: true });
      }
      if (response.data.data.user) {
        this.setState({ loggedIn: true });
      }
    });

    axios.get('/api/projects/' + this.props.match.params.id).then(res => {
      this.setState({
        project: res.data
      })
    }).catch(err => {
      console.log("Error from ShowProjectDetails");
    });

    axios.get('/api/comments/' + this.props.match.params.id).then(res => {
      this.setState({
        comments: res.data
      })
    }).catch(err => {
      console.log('Error from Comments');
    })
  };

  editPage = e => {
    const header = {
      headers: {
        'Authorization': reactLocalStorage.get('token')
      }
    }

    axios.post('/api/auth', null, header).then(response => {
      if (response.data.data.user.isAdmin === "true") {
        this.props.history.push('/edit/' + this.props.match.params.id);
      }
    });
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createComment = e => {
    e.preventDefault();

    const header = {
      headers: {
        'Authorization': reactLocalStorage.get('token')
      }
    }

    axios.post('/api/auth', null, header).then(response => {
      if (response.data.data.user) {
        const data = {
          author: response.data.data.user.username,
          description: this.state.description,
          published_date: moment().format("DD/MM/YYYY")
        };

        axios
          .post('/api/comments/' + this.props.match.params.id, data, header)
          .then(res => {
            this.setState({
              description: '',
            });
            window.location.reload(false);
          })
          .catch(err => {
            console.log("Error in Create Comment!");
          })
      }
    });
  }

  render() {
    const project = this.state.project;
    document.title = project.title;
    let ProjectItem =
      <Table hover variant="dark" responsive="sm">
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
          {
            project.sourcecode &&
            <tr>
              <th scope="row"></th>
              <td>Source code</td>
              <td>
                <Link to={{ pathname: project.sourcecode }} target="_blank">{project.sourcecode}</Link>
              </td>
            </tr>
          }
          {
            project.download &&
            <tr>
              <th scope="row"></th>
              <td>Download link</td>
              <td>
                <Link to={{ pathname: project.download }} target="_blank">{project.download}</Link>
              </td>
            </tr>
          }
        </tbody>
      </Table>

    const comments = this.state.comments;
    let commentList;

    if (!comments) {
      commentList = "there is no project record!";
    } else {
      commentList = comments.map((comment, k) =>
        <div className="container">
          <CommentContainer comment={comment} key={k} project={this.props.match.params.id} />
        </div>
      );
    }

    return (
      <div className="container details-container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <br />
            <h1 className="display-4 text-center">{project.title}</h1>
            {
              project.title == "Space Run" &&
              <center>
                <img src={spacerunlogo} width={250} height={250} />
              </center>
            }
            {
              project.title == "Square It Out" &&
              <center>
                <img src={squareitoutlogo} width={250} height={250} />
              </center>
            }
            {
              project.title == "Train Math" &&
              <center>
                <img src={trainmathlogo} width={250} height={250} />
              </center>
            }
            <hr />
          </div>
        </div>
        <div>
          {ProjectItem}
          {
            this.state.isAdmin &&
            <div>
              <br />
              <br />
              <button onClick={this.editPage.bind()} className="btn btn-outline-info btn-lg btn-block">Edit Project</button>
              <br />
              <br />
            </div>
          }
        </div>
        <br />
        <br />
        <h2 className="text-center">Comments</h2>
        <hr />
        {
          this.state.loggedIn &&
          < div >
            <form noValidate onSubmit={this.createComment.bind()}>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Comment'
                  name='description'
                  className='form-control'
                  value={this.state.description}
                  onChange={this.onChange}
                />
              </div>

              <input
                type="submit"
                className="btn btn-outline-warning btn-block mt-3"
              />
            </form>
            <br />
            <br />
          </div>
        }
        <div className="comment-list">
          {commentList}
        </div>
        <br />
        <br />
      </div >
    );
  }
}

export default ShowProjectDetails;