import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import ShowProjectList from './components/ShowProjectList';
import ShowProjectDetails from './components/ShowProjectDetails';
import UpdateProject from './components/UpdateProject';
import Login from './components/Login';
import About from './components/About';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import CreateProject from './components/CreateProject';

function Router() {

  return (
    <BrowserRouter>
      <NavigationBar />
      <Route exact path='/' component={Home} />
      <Route path='/projects' component={ShowProjectList} />
      <Route path='/project/:id' component={ShowProjectDetails} />
      <Route path='/edit/:id' component={UpdateProject} />
      <Route path='/create' component={CreateProject} />
      <Route path='/login' component={Login} />
      <Route path='/about' component={About} />
      <Route path='*' component={Home} />
      <Footer />
    </BrowserRouter>
  );
}

export default Router;