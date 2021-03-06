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
import Register from './components/Register';
import AdminPanel from './components/AdminPanel';

function Router() {

  return (
    <BrowserRouter>
      <NavigationBar />
      <div className="Body">
        <Route exact path='/' component={Home} />
        <Route exact path='/projects' component={ShowProjectList} />
        <Route exact path='/project/:id' component={ShowProjectDetails} />
        <Route exact path='/edit/:id' component={UpdateProject} />
        <Route exact path='/create' component={CreateProject} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/about' component={About} />
        <Route exact path='/adminpanel' component={AdminPanel} />
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;