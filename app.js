/* Copyright 2017, IngweSpot Worx Pty(Ltd)
# Created by           Last updated            Version
# Samukelo Jiyane      14-May-2017               Original

#    http://www.googleappSpot.com/<endpoint>
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONsdS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
*/

// Get dependencies
var path = require('path');
var http = require('http');
var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var process = require('process');

var app = express();

var controller = require('./server/controllers/api.controller');
var config = require('./config');

var entities = require('./model/entities');
var users = require('./model/users');
var companies = require('./model/companies');
var industries = require('./model/industries');
var categories = require('./model/categories');
var stalls = require('./model/stalls');
var bookings = require('./model/bookingDets');

var mongoose = require('mongoose');
mongoose.connect(config.get('MONGO_URL'));

/**
 * Get port from environment and store in Express.
 */
var db_server  = process.env.DB_ENV || 'primary';
var port = process.env.NODE_ENV === 'production' ? 80 : config.get('PORT');
var ip = process.env.ip;

app.set('ip', ip);
app.set('port', port);

/**
 * Create HTTP server.
 */
var server = http.createServer(app);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connection.once('open', function(err, database) {
  var db;    
  //logger.debug('sam');
  //logger.debug('MongoDB connected [%s]', url);  
     
  console.log('Database connection ready');
  console.log("Connected to " + db_server + " database");   
    
  // Save database object from the callback for reuse.
   db = database;
 
  // Start the server
  const server = app.listen(port, () => {
  const port = server.address().port;
 console.log(`App listening on port ${port}`);
  }); 
});

var initDB = function () {
  newContact = new contact({
                        name : "Arif Khan"
                    });
    
  newContact.save(function(err) {
    if (!err) {
      console.log('new contact created successfully');
    } else {
      console.log('Unable to create contact');
      console.log('Error ' + err);
    }
  });
};

mongoose.connection.on('connected', function() {
    console.log('MongoDB event connected');
});

mongoose.connection.on('disconnected', function() {
                console.log('Mongoose default connection to DB: ' + db_server + ' disconnected');
            });

 mongoose.connection.on('reconnected', function() {
                console.log('MongoDB event reconnected');
            });

mongoose.connection.on('error', function(err) {
        //console.error.bind(console, 'connection error:')
        console.log('Failed to connect to DB ' + db_server + ' on startup ', err);
        mongoose.connection.close();
        process.exit(1);
       });

var gracefulExit = function() { 
  mongoose.connection.close(function () {
    console.log('Mongoose default connection with DB ' + db_server + ' is disconnected through app termination');
    process.exit(0);
  });
};

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', gracefulExit).on('SIGTERM', gracefulExit);

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// routes
app.use('/', controller);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Status 404 - Resource not found');
    err.status = 404;
    next(err);
});

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

module.exports = app;