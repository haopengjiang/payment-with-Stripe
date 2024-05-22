require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const { MONGO_USER, MONGO_PASSWORD } = process.env;


const getMongoConnectionString = () => {
    console.log(`=> initiate mongo connection`);
    return `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@paymentcluster.rem2egc.mongodb.net/?retryWrites=true&w=majority&appName=paymentCluster`;
}
mongoose.connect(getMongoConnectionString());
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})