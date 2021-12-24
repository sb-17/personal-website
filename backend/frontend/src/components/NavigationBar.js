import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { reactLocalStorage } from 'reactjs-localstorage';
import axios from 'axios';

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
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
              <Nav.Link href="https://github.com/sb-17">Github</Nav.Link>
              <Nav.Link href="https://twitter.com/lostin_games">Twitter</Nav.Link>
              <Nav.Link href="https://discord.gg/9ERdXUBwEZ">Discord</Nav.Link>
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