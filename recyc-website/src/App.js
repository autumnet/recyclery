import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Component/Navbar.js';
import Home from './Component/Home.js';
import About from './Component/About.js';
import Blog from './Component/Blog.js'; 
import Community from './Component/Community.js';
import Support from './Component/Support.js';
import History from './Component/History.js';
import News from './Component/News.js';
import Principles from './Component/Principles.js';
import Programs from './Component/Programs.js';
import Who from './Component/Who.js';
import Footer from './Component/Footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (

    <Router>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Principles" component={Principles} />
        <Route path="/Who" component={Who} />
        <Route path="/History" component={History} />
        <Route path="/Community" component={Community} />
        <Route path="/News" component={News} />
        <Route path="/Blog" component={Blog} />
        <Route path="/Programs" component={Programs} />
        <Route path="/Support" component={Support} />
      </Switch>

      <Footer />
      
    </Router>

  

  );
}

export default App;
