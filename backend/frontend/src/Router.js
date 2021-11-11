import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import ShowProjectList from './components/ShowProjectList';
import ShowProjectDetails from './components/ShowProjectDetails';
import AdminPanel from './components/AdminPanel';
import About from './components/About';
import NavigationBar from './components/NavigationBar';

function Router() {

  return (
    <BrowserRouter>
        <NavigationBar />
        <Route exact path='/' component={Home} />
        <Route path='/projects' component={ShowProjectList} />
        <Route path='/project/:id' component={ShowProjectDetails} />
        <Route path='/adminpanel' component={AdminPanel} />
        <Route path='/about' component={About} />
    </BrowserRouter>
  );
}

export default Router;