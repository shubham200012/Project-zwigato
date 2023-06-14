const mongoose = require('mongoose');

mongoose
    .connect('mongodb://127.0.0.1:27017/zwigato')
    .then((res) => {
        console.log('Mongo connection established');
    })
    .catch((err) => {
        console.log(err);
    });

module.exports = mongoose;
