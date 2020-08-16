import React, { useState, useEffect } from 'react';
import Footer from "../components/Footer";

class About extends React.Component{
  render() {
    return(
      <>
      <div class="py-3 bg-primary">
        <div class="container">
          <div class="row">
            <div class="px-md-5 p-3 col-md-6 d-flex flex-column align-items-start justify-content-start">

              <h1>Who are we?</h1>
              <p class=" lead">
              Mapivist is an event-promotion platform that focuses on activist activities and events.
              Our mission is to help activists spread the message and share information about their events to gain the media attention and support they need.</p>
              <p class = "mb-3 lead">
              Moreover, we also aim to raise people's awareness of the local issues by providing people with a tool to search for activist activities of their interest that are happening in their geographical area.
              </p>
            </div>


            <div class="px-md-5 p-3 col-md-6 d-flex flex-column align-items-start justify-content-start">
              <h1>Why us?</h1>
              <p class="mb-3 lead">Ever find yourself overwhelmed by the massive pool of information on the internet and unable to find activist activities of your interest?</p>

              <p class="mb-3 lead">
              Mapivist offers an embedded user-friendly map that contains information of all the activist activities that are happening in your geographical area.
              </p>
              <p class = "mb-3 lead"><b>Still want more?</b>
              <br></br>You can also search for activist activities happening all around the world on Mapivist.</p>
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
