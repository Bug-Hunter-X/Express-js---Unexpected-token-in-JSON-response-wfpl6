const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.get('/api/data', (req, res) => {
  const data = {
    message: 'This is some data',
    moreData: 123
  };
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});