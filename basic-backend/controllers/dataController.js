const fs = require('fs');
const path = require('path');

const dataController = (req, res) => {
  const filePath = path.join(__dirname, '../data/user.json');
  const data = fs.readFileSync(filePath, 'utf8');

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(data);
};

module.exports = dataController;
