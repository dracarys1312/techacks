import React, { useState, useEffect } from 'react';
import Footer from "../components/Footer";

class About extends React.Component{
  render() {
    return(
      <>
      <div class="py-5 bg-primary">
        <div class="container">
          <div class="row">
            <div class="px-md-5 p-3 col-md-6 d-flex flex-column align-items-start justify-content-center">
              <h1>A platform for activists</h1>
              <p class="mb-3 lead">
              Mapivist is a platform to spread the message and share information about activist activities and events that are happening in their local area. We aim to help activists gain media attention for their events and find the support they need.</p>

              <p class = "mb-3 lead">With Mapivist, our mission is to raise people's awareness of the local issues by providing a tool to help people search for activist activities of their interest in a certain area.
              </p>
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
