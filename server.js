const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors');
const PORT = process.env.PORT || 4000;
const usersRouter = require('./routes/usersRouter');
const albumsRouter = require('./routes/albumsRouter');
const songsRouter = require('./routes/songsRouter');

const app = express();

app.use(bodyParser.json());
app.use(logger('dev'));
app.use(cors());

app.use('/users', usersRouter);
// app.use('/albums', albumsRouter);
// app.use('/songs', songsRouter);

app.get('/', (req, res) => {
  try {
    res.json({ mesg: `This is the main page`})
  } catch(e) {
    console.log(e);
    res.status(500).send(e.message);
  }
});

app.listen(PORT, () => {
  console.log(`Ready and waiting on port: ${PORT}`)
});
