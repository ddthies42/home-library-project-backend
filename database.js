const mongoose = require('mongoose');

const mongoDB = process.env.MONGODB_URI || 'mongodb+srv://ddthies:thytran0402@netcentriccluster.26wkw.mongodb.net/BookDatabase?retryWrites=true&w=majority';

mongoose
    .connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('DB Connected!');
    })
    .catch(error => {
        console.log('Connection Error: ${err.message}');
    });

const database = mongoose.connection;

database.on('error', console.error.bind(console, 'MongoDB Connection Error'));

module.exports = database;