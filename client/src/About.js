import React, { useState, useEffect } from 'react';


class Navbar extends React.Component{
  render() {
    return(
    <nav class="navbar navbar-expand-lg bg-primary navbar-light">
      <div class="container"> <a class="navbar-brand" href="#">
          <b> Maptivist</b>
        </a> <button class="navbar-toggler navbar-toggler-right border-0" type="button" data-toggle="collapse" data-target="#navbar17">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbar17">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item"> <a class="nav-link" href="#">Back to Map</a> </li>
          </ul>
        </div>
      </div>
    </nav>
    );
  }

}


class Footer extends React.Component{
  render() {
    return(
      <div class="py-3 bg-primary">
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-center d-md-flex justify-content-between align-items-center">
              <ul class="nav d-flex justify-content-center">
                <li class="nav-item"> <a class="nav-link active" href="#">Home</a> </li>
                <li class="nav-item"> <a class="nav-link" href="#">About us</a> </li>
                <li class="nav-item"> <a class="nav-link" href="#">Terms of use</a> </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class About extends React.Component{
  render() {
    return(
      <>
      <Navbar />
      <div class="py-5 bg-primary">
        <div class="container">
          <div class="row">
            <div class="px-md-5 p-3 col-md-6 d-flex flex-column align-items-start justify-content-center">
              <h1>A platform for activists</h1>
              <p class="mb-3 lead">Mapivist is a platform to help activists spread the message and share information about happening activities in their local area.

              With Mapivist, we aim to raise people's awareness of the local issues as well as help activists gain media attention and find support they need.</p>
              <p class="mb-2">Choose an option</p>
              <div class="row">
                <div class="col-md-12"> <i class="fa fa-stop-circle fa-3x mr-3 text-muted d-inline"></i> <i class="fa fa-circle-o fa-3x mx-3 text-muted d-inline"></i> <i class="fa fa-stop-circle-o fa-3x mx-3 text-muted d-inline"></i> <i class="fa fa-circle fa-3x ml-3 text-muted d-inline"></i> </div>
              </div>
            </div>
            <div class="col-md-6"> <img class="img-fluid d-block" src="https://static.pingendo.com/img-placeholder-tablet.svg"/>
            </div>
          </div>
        </div>
      </div>
      <div class="py-5">
        <div class="container">
          <div class="row">
            <div class="px-5 col-md-8 text-center mx-auto">
              <h3 class="display-4 text-dark"> <b>Pingendo</b> </h3>
              <h2 class="my-3">I am so happy, my dear friend.</h2>
              <p class="mb-3">I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      </>
    );
  }
}

export default About;
