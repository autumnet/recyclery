import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Component/Navbar.js';
import Home from './Component/Home.js';
import Wtf from './Component/Wtf.js';
import Blog from './Component/Blog.js'; 
import Mechanic from './Component/Mechanic.js';
import Rides from './Component/Rides.js';
import Run from './Component/Run.js';
import Support from './Component/Support.js';
import History from './Component/History.js';
import News from './Component/News.js';
import Portraits from './Component/Portraits.js';
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
        <Route path="/Principles" component={Principles} />
        <Route path="/Who" component={Who} />
        <Route path="/History" component={History} />
        <Route path="/News" component={News} />
        <Route path="/BikePortraits" component={Portraits} />
        <Route path="/Blog" component={Blog} />
        <Route path="/Programs" component={Programs} />
        <Route path="/WTF" component={Wtf} />
        <Route path="/Mechanic" component={Mechanic} />
        <Route path="/Rides" component={Rides} />
        <Route path="/Run" component={Run} />
        <Route path="/Support" component={Support} />
      </Switch>

      <Footer />
      
    </Router>

  

  );
}

export default App;
