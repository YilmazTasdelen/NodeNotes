const express = require('express');
const cors = require('cors');
const planetsRouter = require('./routes/planets/planets.router');
const path = require('path');

const app = express();

app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use(planetsRouter);
app.get('/', (res, req) => {
  res.sendFile(path.join(__dirname, '..', 'oublic', 'index.html'));
});

module.exports = app;
