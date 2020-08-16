import React, { useState, useEffect } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';

import { listLogEntries } from './API';
import LogEntryForm from './LogEntryForm';

class Navbar extends React.Component{
    render() {
        return (
          <nav class="navbar navbar-expand-lg bg-primary navbar-light">
            <div class="container">
              <button class="navbar-toggler navbar-toggler-right border-0 p-0" type="button" data-toggle="collapse" data-target="#navbar14">
              </button>
              <div class="collapse navbar-collapse" id="navbar14">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item"> </li>
                  <li class="nav-item mx-1"> <a onclick="openNav()" class="nav-link" href="#">
                      <i class="fa fa-filter fa-fw fa-lg"></i>
                    </a> </li>
                </ul>
                <p class="d-none d-md-block lead mb-0 text-dark">Maptivist</p>
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item mx-1"> <a class="nav-link" data-toggle="modal" data-target="#modalContactForm">
                      <i class="fa fa-calendar-plus-o fa-fw fa-lg"></i>
                    </a> </li>
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

const App = () => {
  const [logEntries, setLogEntries] = useState([]);
  const [showPopup, setShowPopup] = useState({});
  const [addEntryLocation, setAddEntryLocation] = useState(null);
  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '83.6vh',
    latitude: 37.6,
    longitude: -95.665,
    zoom: 3
  });

  const getEntries = async () => {
    const logEntries = await listLogEntries();
    setLogEntries(logEntries);
  };

  useEffect(() => {
    getEntries();
  }, []);

  const showAddMarkerPopup = (event) => {
    const [ longitude, latitude ] = event.lngLat;
    setAddEntryLocation({
      latitude,
      longitude,
    });
  };

  return (
    <>
    <Navbar />

    <ReactMapGL
      {...viewport}
      mapStyle="mapbox://styles/npthao1312/ckdwonlqp3b5z19nw2pov1qth"
      mapboxApiAccessToken={"pk.eyJ1IjoibnB0aGFvMTMxMiIsImEiOiJja2R2dWZtbDQybWJ3MnptaDR5NWwwd243In0.j1wEWKVw0VyKuCwVjb4MKw"}
      onViewportChange={setViewport}
      onDblClick={showAddMarkerPopup}
    >
      {
        logEntries.map(entry => (
          <React.Fragment key={entry._id}>
            <Marker
              latitude={entry.latitude}
              longitude={entry.longitude}
            >
              <div
                onClick={() => setShowPopup({
                  // ...showPopup,
                  [entry._id]: true,
                })}
              >
                <svg
                  className="marker yellow"
                  style={{
                    height: `${6 * viewport.zoom}px`,
                    width: `${6 * viewport.zoom}px`,
                  }}
                  version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512 512">
                  <g>
                    <g>
                      <path d="M256,0C153.755,0,70.573,83.182,70.573,185.426c0,126.888,165.939,313.167,173.004,321.035
                        c6.636,7.391,18.222,7.378,24.846,0c7.065-7.868,173.004-194.147,173.004-321.035C441.425,83.182,358.244,0,256,0z M256,278.719
                        c-51.442,0-93.292-41.851-93.292-93.293S204.559,92.134,256,92.134s93.291,41.851,93.291,93.293S307.441,278.719,256,278.719z"/>
                    </g>
                  </g>
                </svg>
              </div>
            </Marker>
            {
              showPopup[entry._id] ? (
                <Popup
                  latitude={entry.latitude}
                  longitude={entry.longitude}
                  closeButton={true}
                  closeOnClick={false}
                  dynamicPosition={true}
                  onClose={() => setShowPopup({})}
                  anchor="top" >
                  <div className="popup">
                    <h1>Tile: {entry.title}</h1>
                    <h2>Orginzer: {entry.organizer}</h2>
                    <p>Description: {entry.description}</p>
                    <p>External Link: {entry.externalLink}</p>
                    <small>Happening on: {new Date(entry.date).toLocaleDateString()}</small>
                  </div>
                </Popup>
              ) : null
            }
          </React.Fragment>
        ))
      }
      {
        addEntryLocation ? (
          <>
          <Marker
            latitude={addEntryLocation.latitude}
            longitude={addEntryLocation.longitude}
          >
            <div>
              <svg
                className="marker red"
                style={{
                  height: `${6 * viewport.zoom}px`,
                  width: `${6 * viewport.zoom}px`,
                }}
                version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512 512">
                <g>
                  <g>
                    <path d="M256,0C153.755,0,70.573,83.182,70.573,185.426c0,126.888,165.939,313.167,173.004,321.035
                      c6.636,7.391,18.222,7.378,24.846,0c7.065-7.868,173.004-194.147,173.004-321.035C441.425,83.182,358.244,0,256,0z M256,278.719
                      c-51.442,0-93.292-41.851-93.292-93.293S204.559,92.134,256,92.134s93.291,41.851,93.291,93.293S307.441,278.719,256,278.719z"/>
                  </g>
                </g>
              </svg>
            </div>
          </Marker>
          <Popup
            latitude={addEntryLocation.latitude}
            longitude={addEntryLocation.longitude}
            closeButton={true}
            closeOnClick={false}
            dynamicPosition={true}
            onClose={() => setAddEntryLocation(null)}
            anchor="top" >
            <div className="popup">
              <LogEntryForm onClose={() => {
                setAddEntryLocation(null);
                getEntries();
              }} location={addEntryLocation} />
            </div>
          </Popup>
          </>
        ) : null
      }
    </ReactMapGL>
    <Footer />
    </>
  );
}

export default App;
