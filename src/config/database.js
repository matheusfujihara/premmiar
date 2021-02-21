const mongoose = require('mongoose');
const config = require('./index');

mongoose.connect("mongodb+srv://admin:admin@premmiar.fyko6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
mongoose.Promise = global.Promise;
// if (config.db.connectionString) {
    
// } else {
//     console.log("No connection string provided.");
// }

module.exports = mongoose;