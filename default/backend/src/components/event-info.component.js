import React, {Component} from 'react';
import {Link } from 'react-router-dom';
import axios from 'axios';

const Event = props => (
  <tr>
      <td>{props.event.event_name}</td>
      <td>{props.event.event_time}</td>
      <td>{props.event.event_address}</td>
      <td>{props.event.event_generalInfo}</td>
      <td>{props.event.event_type}</td>
      <td>{props.event.event_organizer}</td>
      <td>{props.event.event_registration_link}</td>
      <td>{props.event.event_virtual}</td>

  </tr>
)
const id = '5f37e9e472d6bd0533169540';

export default class EventInfo extends Component {

  constructor(props) {
    super(props);
    this.state = {event: {}};
  }

  componentDidMount() {
    axios.get('http://localhost:4000/events/'+id)
         .then(response => {
           this.setState({event: response.data});
         })
         .catch(function (error) {
           console.log(error);
         });
  }

  eventList() {
        return this.state.events.map(function(currentEvent, i) {
            return <Event event={currentEvent} key={i} />;
        });

    }

  getEventInfo() {
    return <Event event={this.state.event} />;
  }
  render() {
    return (
      <div>
      <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
              <tr>
                  <th>Name</th>
                  <th>Time</th>
                  <th>Address</th>
                  <th>Description</th>
                  <th>Type</th>
                  <th>Organizer</th>
                  <th>Registration Link</th>
                  <th>Is this event virtual?</th>

              </tr>
          </thead>
          <tbody>
                { this.getEventInfo() }
          </tbody>
      </table>
      </div>
    )
  }
}
