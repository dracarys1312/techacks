const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 4000;
const mongoose = require('mongoose');
const eventRoutes = express.Router();

let Event = require('./events.model');

app.use(cors());
app.use(bodyParser.json());


mongoose.connect('mongodb://127.0.0.1:27017/events', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
  console.log('MongoDB database connection estabblished');
});

eventRoutes.route('/').get(function(req, res) {
    Event.find(function(err, events) {
        if (err) {
            console.log(err);
        } else {
            res.json(events);
        }
    });
});


// eventRoutes.route('/:id').get(function(req, res) {
//     let id = req.params.id;
//     Event.findById(id, function(err, event) {
//         res.json(event);
//     });
// });

eventRoutes.route('/:lat&long').get(function(req, res) {
    let latitude = req.params.lat;
    let longtitude = req.params.long;
    Event.findById({lat: latitude, long: longtitude}, function(err, event) {
        res.json(event);
    });
});

eventRoutes.route('/add').post(function(req, res) {
    let event = new Event(req.body);
    event.save()
        .then(event => {
            res.status(200).json({'event': 'event added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new event failed');
        });
});

eventRoutes.route('/update/:id').post(function(req, res) {
    Event.findById(req.params.id, function(err, event) {
        if (!event)
            res.status(404).send('data is not found');
        else
          event.event_time = req.body.event_time;
          event.event_name = req.body.event_name;
          event.event_address = req.body.event_address;
          event.event_generalInfo = req.body.event_generalInfo;
          event.event_type = req.body.event_type;
          event.event_organizer = req.body.event_organizer;
          event.event_registration_link = req.body.event_registration_link;
          event.event_virtual = req.body.event_virtual;


            event.save().then(event => {
                res.json('Event updated');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});



app.use('/events', eventRoutes);
app.listen(PORT, function() {
  console.log('Server is running on Port: '+ PORT);
});
