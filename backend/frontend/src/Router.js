import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import ShowProjectList from './components/ShowProjectList';
import ShowProjectDetails from './components/ShowProjectDetails';
import AdminPanel from './components/AdminPanel';
import About from './components/About';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';

function Router() {

  return (
    <BrowserRouter>
      <NavigationBar />
      <Route exact path='/' component={Home} title="Home" />
      <Route path='/projects' component={ShowProjectList} title="Projects" />
      <Route path='/project/:id' component={ShowProjectDetails} title="Project" />
      <Route path='/adminpanel' component={AdminPanel} title="Admin Panel" />
      <Route path='/about' component={About} title="About" />
      <Footer />
    </BrowserRouter>
  );
}

export default Router;