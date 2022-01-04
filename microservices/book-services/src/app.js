const express = require('express');
const app = express();

const response = {
    data: [],
    services: "Book Service",
    architecture: "Microservices"
};

const logger = (message) => console.log("[Book Service]: " + message);

app.use((req, res, next) => {
    response.data = [];
    next();
});

app.get('/api/v2/books', (req, res) => {
    response.data.push("Soft Skill", "Clean Code", "Java Deitel 8");
    logger("Get book data");
    return res.send(response);
});

module.exports = app;