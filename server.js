// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const jwt = require('express-jwt');
const cors = require('cors');

// Get our API routes
const api = require('./server/routes/api');

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api', api);

const authCheck = jwt({
  secret: new Buffer('8TBMbB6yrPmjqosrJwHQbQ56yXR3Yb-Zq3X2HVztOhi0bNvHaCuPEEcKBD8rwy9B', 'base64'),
  audience: 'Y2Wjysrhzn5rUlTUDZibeZiz5P0QZFzB'
})

let users = [
  { id: 1, name: 'Todd Motto', image: 'image-1.jpg' },
  { id: 2, name: 'Brad Green', image: 'image-2.jpg' },
  { id: 3, name: 'Igor Minar', image: 'image-3.jpg' }
];


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.get('/api/users', authCheck, function(req, res) {
  res.json(users);
});

const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log(`API running on localhost:${port}`));