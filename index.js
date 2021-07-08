require('dotenv').config();
const express = require('express');
const server = express();

const port = process.env.PORT || 5000;

server.use(express.json());

server.get('/api', (req, res) => {
  res.status(200).json({
    message: 'Get endpoint is up!!!!!'
  });
});

server.listen(port, () => {
  console.log('--------------------------------------------------------------------------------');
  console.log(`Server Listening on http://localhost:${port}`);
  console.log('--------------------------------------------------------------------------------');
});
