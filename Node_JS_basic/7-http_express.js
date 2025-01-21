const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const PORT = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(process.argv[2]).then((studentslist) => {
    res.send(200, `This is the list of our students\n${studentslist.join('\n')}`);
  }).catch((err) => {
    res.send(500, err.message);
  });
});

app.listen(PORT, () => {
  console.log('server running');
});

module.exports = app;
