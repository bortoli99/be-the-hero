const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentControllet = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/session', SessionController.create);

routes.get('/ongs', OngController.read);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.readIdOngsToIncidents);

routes.get('/incidents', IncidentControllet.read);
routes.post('/incidents', IncidentControllet.create);
routes.delete('/incidents/:id', IncidentControllet.delete);

module.exports = routes;

