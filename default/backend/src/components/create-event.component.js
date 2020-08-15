import React, {Component} from 'react';
import axios from 'axios';
export default class CreateEvent extends Component {
  constructor(props) {
    super(props);

    this.onChangeEventName = this.onChangeEventName.bind(this);
    this.onChangeEventTime = this.onChangeEventTime.bind(this);
    this.onChangeEventAddress = this.onChangeEventAddress.bind(this);
    this.onChangeEventGeneralInfo = this.onChangeEventGeneralInfo.bind(this);
    this.onChangeEventType = this.onChangeEventType.bind(this);
    this.onChangeEventOrganizer = this.onChangeEventOrganizer.bind(this);
    this.onChangeEventRegistrationLink = this.onChangeEventRegistrationLink.bind(this);
    this.onChangeEventVirtual = this.onChangeEventVirtual.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      event_lat: '',
      event_long:'',
      event_name : '',
      event_time: '',
      event_address: '',
      event_generalInfo: '',
      event_type: '',
      event_organizer: '',
      event_registration_link: '',
      event_virtual: 'No'
    }
  }

  onChangeEventName(e) {
    this.setState({
      event_name: e.target.value
    });
  }

  onChangeEventTime(e) {
    this.setState({
      event_time: e.target.value
    });
  }

  onChangeEventAddress(e) {
    this.setState({
      event_address: e.target.value
    });
  }

  onChangeEventGeneralInfo(e) {
    this.setState({
      event_generalInfo: e.target.value
    });
  }

  onChangeEventType(e) {
    this.setState({
      event_type: e.target.value
    });
  }

  onChangeEventOrganizer(e) {
    this.setState({
      event_organizer: e.target.value
    });
  }

  onChangeEventRegistrationLink(e) {
    this.setState({
      event_registration_link: e.target.value
    });
  }

  onChangeEventVirtual(e) {
    this.setState({
      event_virtual: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    //submit logic
    console.log('Form submitted:');
    console.log('Event Name: ${this.state.event_name}');

    const newEvent = {
      event_name : this.state.event_name,
      event_time: this.state.event_time,
      event_address: this.state.event_address,
      event_generalInfo: this.state.event_generalInfo,
      event_type: this.state.event_type,
      event_organizer: this.state.event_organizer,
      event_registration_link: this.state.event_link,
      event_virtual: this.state.event_virtual
    }

    axios.post('http://localhost:4000/events/add', newEvent)
         .then(res => console.log(res.data));

    this.setState({
      event_name : '',
      event_time: '',
      event_address: '',
      event_generalInfo: '',
      event_type: '',
      event_organizer: '',
      event_registration_link: '',
      event_virtual: 'No',

    })
  }

  render() {
    // return (
    //   <div style = {{marginTop: 20}}>
      //   <h3>Create New Event</h3>
      //   <form onSubmit = {this.onSubmit}>
      //     <div className = 'form-group'>
      //       <label>Name: </label>
      //       <input type = 'text'
      //              className= 'form-control'
      //              value = {this.state.event_name}
      //              onChange = {this.onChangeEventName}
      //              />
      //     </div>
      //
      //     <div className = 'form-group'>
      //       <label>Time: </label>
      //       <input type = 'text'
      //              className= 'form-control'
      //              value = {this.state.event_time}
      //              onChange = {this.onChangeEventTime}
      //              />
      //     </div>
      //
      //     <div className = 'form-group'>
      //       <label>Addres: </label>
      //       <input type = 'text'
      //              className= 'form-control'
      //              value = {this.state.event_address}
      //              onChange = {this.onChangeEventAddress}
      //              />
      //     </div>
      //
      //     <div className = 'form-group'>
      //       <label>Description: </label>
      //       <input type = 'text'
      //              className= 'form-control'
      //              value = {this.state.event_generalInfo}
      //              onChange = {this.onChangeEventGeneralInfo}
      //              />
      //     </div>
      //
      //     <div className = 'form-group'>
      //       <label>Type: </label>
      //       <input type = 'text'
      //              className= 'form-control'
      //              value = {this.state.event_type}
      //              onChange = {this.onChangeEventType}
      //              />
      //     </div>
      //
      //     <div className = 'form-group'>
      //       <label>Organizer: </label>
      //       <input type = 'text'
      //              className= 'form-control'
      //              value = {this.state.event_organizer}
      //              onChange = {this.onChangeEventOrganizer}
      //              />
      //     </div>
      //
      //     <div className = 'form-group'>
      //       <label>Registration link (Optional): </label>
      //       <input type = 'text'
      //              className= 'form-control'
      //              value = {this.state.event_registration_link}
      //              onChange = {this.onChangeEventRegistrationLink}
      //              />
      //     </div>
      //
      //     <div className = 'form-group'>
      //       <p>Is this a virtual event? </p>
      //       <div className = 'form-check form-check-inline'>
      //       <input className= 'form-check-input'
      //              type = 'radio'
      //              name = 'virtual'
      //              id = 'Yes'
      //              value = 'Yes'
      //              checked = {this.state.event_virtual === 'Yes'}
      //              onChange = {this.onChangeEventVirtual}
      //              />
      //       <label className = 'form-check-label'>Yes</label>
      //
      //       <input className= 'form-check-input'
      //              type = 'radio'
      //              name = 'virtual'
      //              id = 'No'
      //              value = 'No'
      //              checked = {this.state.event_virtual === 'No'}
      //              onChange = {this.onChangeEventVirtual}
      //              />
      //       <label className = 'form-check-label'>No</label>
      //       </div>
      //     </div>
      //
      return (
        <div style = {{marginTop: 20}}>
        <form>
          <div class="form-row">
            <div class="form-group col-md-12">
                 <input type="text"
                        class="form-control"
                        id="form36"
                        placeholder="Event Name"
                        value = {this.state.event_name}
                        onChange = {this.onChangeEventName}/>

                 </div>
          </div>

          <div class="form-group">
                <input type="text"
                       class="form-control"
                       id="form38"
                       placeholder="Location"
                       value = {this.state.event_address}
                       onChange = {this.onChangeEventAddress}/>
          </div>
          <div class="form-group">
                <input type="email"
                        class="form-control"
                        id="form39"
                        placeholder="Time"
                        value = {this.state.event_time}
                        onChange = {this.onChangeEventTime}/>
          </div>
          <div class="form-row">
            <div class="form-group col-md-12">
                  <input type="text"
                         class="form-control"
                         id="form41"
                         placeholder="Description"
                         value = {this.state.event_generalInfo}
                         onChange = {this.onChangeEventGeneralInfo}/>
            </div>
          </div>
          <div class="form-group">
              <input type="text"
                    class="form-control"
                    id="form42"
                    placeholder="Organizer"
                    value = {this.state.event_organizer}
                    onChange = {this.onChangeEventOrganizer}/>
          </div>

          <div className="form-group">
              <input type="submit" value="Create Event" className="btn btn-primary" />
          </div>
        </form>
        </div>
          // <div className="form-group">
          //     <input type="submit" value="Create Event" className="btn btn-primary" />
          // </div>





        // </form>


      // </div>
    )
  }
}
