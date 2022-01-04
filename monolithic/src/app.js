const express = require('express');
const app = express();

const response = {
    data: [],
    services: "Monolithic Service",
    architecture: "Monolithic"
};

app.use((req, res, next) => {
    response.data = [];
    next();
});

app.get('/api/v1/users', (req, res) => {
    response.data.push("Jonny", "Andres", "Carlos");
    return res.send(response);
});

app.get('/api/v1/books', (req, res) => {
    response.data.push("Clean Code", "Pragmatic Programmer", "Soft Skills");
    return res.send(response);
});

app.get('/api/v1/cars', (req, res) => {
    response.data.push("Toyota", "Mazda", "Hyundai");
    return res.send(response);
});

module.exports = app;