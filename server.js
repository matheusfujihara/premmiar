const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');

const app = express();

/**
 * Create a server
 */
const server = http.createServer(app);

/**
 * Valid port and normalize
 */

const port = validPort(process.env.PORT || '8080');

/**
 * Get all routes registered
 */

const routes = require('./src/routes/index');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('port', port);
// require('./src/config/database')

app.use('/', routes);

server.listen(port, () => {
  console.log(`Magic is happen on port ${port}`);
});

/**
 * Function: Valid port into a string, number or false.
 */

function validPort(portUnvalid) {
  var port = parseInt(portUnvalid, 10);

  if (isNaN(port))
    return portUnvalid;
  
  if (port >= 0)
    return port;

  return false;
}