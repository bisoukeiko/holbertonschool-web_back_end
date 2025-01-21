const http = require('http');

const port = 1245;

const app = http.createServer((request, response) => {
  response.writeHead(200, {
    'Content-Type': 'text/html',
  });

  const responseMessage = 'Hello Holberton School!';
  response.end(responseMessage);
});

app.listen(port);

module.exports = app;
