const url = require('url');

const greetController = (req, res) => {
  const name = url.parse(req.url, true).query.name || 'there';

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, ' + name + '!');
};

module.exports = greetController;
