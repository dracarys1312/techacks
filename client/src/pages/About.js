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
              <p class="mb-3 lead">Mapivist is a platform to help activists spread the message and share information about happening activities in their local area.

              With Mapivist, we aim to raise people's awareness of the local issues as well as help activists gain media attention and find support they need.</p>
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
