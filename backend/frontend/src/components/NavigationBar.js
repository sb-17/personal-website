import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { reactLocalStorage } from 'reactjs-localstorage';
import axios from 'axios';
import { AiOutlineGithub, AiOutlineTwitter } from 'react-icons/ai';
import { BsDiscord } from 'react-icons/bs';

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      isAdmin: false
    };
  }

  componentDidMount() {
    const header = {
      headers: {
        'Authorization': reactLocalStorage.get('token')
      }
    }

    axios.post('/api/auth', null, header).then(response => {
      if (response.data.data.user) {
        this.setState({ loggedIn: true });
      }
      if (response.data.data.user.isAdmin) {
        this.setState({ isAdmin: true });
      }
    });
  };

  logout() {
    const header = {
      headers: {
        'Authorization': reactLocalStorage.get('token')
      }
    }

    axios.post('/api/auth', null, header).then(response => {
      if (response.data.data.user) {
        reactLocalStorage.remove('token');
        window.location.reload(false);
      }
    });
  }

  render() {
    return (
      <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">Šimon Borovský</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/projects">Projects</Nav.Link>
              <Nav.Link href="/about">About me</Nav.Link>
              <Nav.Link href="https://github.com/sb-17" className="navlinkicon"><AiOutlineGithub size={20} className="icon" />Github</Nav.Link>
              <Nav.Link href="https://twitter.com/lostin_games" className="navlinkicon"><AiOutlineTwitter size={20} className="icon" />Twitter</Nav.Link>
              <Nav.Link href="https://discord.gg/9ERdXUBwEZ" className="navlinkicon"><BsDiscord size={20} className="icon" />Discord</Nav.Link>
              {
                this.state.isAdmin &&
                <Nav.Link href="/adminpanel">Admin Panel</Nav.Link>
              }
            </Nav>
            <Nav className="ml-auto">
              {
                this.state.loggedIn &&
                <Nav.Link onClick={this.logout.bind()}>Log out</Nav.Link>
              }
              {
                !this.state.loggedIn &&
                <Nav.Link href="/login">Log in</Nav.Link>
              }
              {
                !this.state.loggedIn &&
                <Nav.Link href="/register">Register</Nav.Link>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NavigationBar;