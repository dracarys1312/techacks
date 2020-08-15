import React from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import EventInfo from "./components/event-info.component";
import EditEvent from "./components/edit-event.component";
import CreateEvent from "./components/create-event.component";

function App() {
  return (
    <Router>
    <div className="container">
      <h2> Add Event</h2>
    </div>
    <Route path = "/" exact component = {EventInfo}/>
    <Route path = "/edit/:id" component = {EditEvent}/>
    <Route path = "/create" component = {CreateEvent}/>
    </Router>
  );
}

export default App;
