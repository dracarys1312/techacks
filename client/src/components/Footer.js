import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Component } from 'react';

class Footer extends React.Component{
  render() {
    return(
      <div class="py-3 bg-primary">
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-center d-md-flex justify-content-between align-items-center">
              <ul class="nav d-flex justify-content-center">
                <li class="nav-item"> <Link to={'/'} className="nav-link"> Home </Link> </li>
                <li class="nav-item"> <Link to={'/about'} className="nav-link">About</Link> </li>
                <li class="nav-item"> <Link to={'/'} className="nav-link">Terms of use</Link> </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
