import React from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import EventInfo from "./components/event-info.component";
import EditEvent from "./components/edit-event.component";
import CreateEvent from "./components/create-event.component";

class App extends React.Component {
  render (){
    return (
      <div className="App">
      <nav className="navbar navbar-expand-lg bg-primary navbar-light">
        <div className="container"> <button className="navbar-toggler navbar-toggler-right border-0 p-0" type="button" data-toggle="collapse" data-target="#navbar14">
          </button>
          <div className="collapse navbar-collapse" id="navbar14">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item"> </li>
              <li className="nav-item mx-1"> <a onclick="openNav()" className="nav-link" href="#">
                  <i className="fa fa-filter fa-fw fa-lg"></i>
                </a> </li>
            </ul>
            <p className="d-none d-md-block lead mb-0 text-dark">Maptivist</p>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item mx-1"> <a className="nav-link" data-toggle="modal" data-target="#modalContactForm">
                  <i className="fa fa-calendar-plus-o fa-fw fa-lg"></i>
                </a> </li>
            </ul>
          </div>
        </div>
      </nav>
      <div id="filterBar" className="filterBar">
        <a href="javascript:void(0)" className="closebtn" onclick="closeNav()">×</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>
      <div className="modal fade" id="modalContactForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header text-center">
              <h4 className="modal-title w-100 font-weight-bold">Host an event</h4>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body mx-3">
              <form>
                <div className="form-row">
                  <div className="form-group col-md-12"> <input type="text" className="form-control" id="form36" placeholder="Event Name"/> </div>
                </div>
                <div className="form-group"> <input type="text" className="form-control" id="form38" placeholder="Location"/> </div>
                <div className="form-group"> <input type="email" className="form-control" id="form39" placeholder="Email"/> </div>
                <div className="form-row">
                  <div className="form-group col-md-12"> <input type="text" className="form-control" id="form41" placeholder="Location"/> </div>
                </div>
                <div className="form-group"> <input type="text" className="form-control" id="form42" placeholder="Subject"/> </div>
                <div className="form-group"> <textarea className="form-control" id="form43" rows="3" placeholder="Your message"></textarea> </div>
              </form>
            </div>
            <div className="modal-footer d-flex justify-content-center">
              <button className="btn btn-unique">Send <i className="fa fa-paper-plane-o ml-1"></i></button>
            </div>
          </div>
        </div>
      </div>
      <div id="map"></div>
      <div className="py-3 bg-primary">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center d-md-flex justify-content-between align-items-center">
              <ul className="nav d-flex justify-content-center">
                <li className="nav-item"> <a className="nav-link active" href="#">Home</a> </li>
                <li className="nav-item"> <a className="nav-link" href="about.html">About us</a> </li>
                <li className="nav-item"> <a className="nav-link" href="#">Terms of use</a> </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
  function storeEvent(){
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
