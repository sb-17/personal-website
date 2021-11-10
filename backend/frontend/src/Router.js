import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import Navbar from "./components/Navbar";
import ShowProjectList from './components/ShowProjectList';
import ShowProjectDetails from './components/ShowProjectDetails';
import UpdateProject from './components/UpdateProject';
import AdminPanel from './components/AdminPanel';

function Router() {

  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route path='/projects' component={ShowProjectList} />
        <Route path='/edit-project/:id' component={UpdateProject} />
        <Route path='/show-project/:id' component={ShowProjectDetails} />
        <Route path='/adminpanel' component={AdminPanel} />
      </div>
    </BrowserRouter>
  );
}

export default Router;