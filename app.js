const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

const port = process.env.PORT || 3000;
const products = require('./routes/productRoute');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/products', products);

mongoose.connect('mongodb://localhost:27017/node_mvc', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('Connected to database');
}).catch(err => {
    console.log('Error:', err.message);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})