const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

//Uncommon Error: Unexpected token in JSON response

//Scenario:  Imagine you have an API endpoint that's supposed to return JSON. However, due to a bug in your application logic, it accidentally sends a string that isn't valid JSON to the client.

//Example of faulty code:

app.get('/api/data', (req, res) => {
  const data = {
    message: 'This is some data',
    //Missing a closing bracket here! This would cause a JSON parse error on the client side
    moreData: 123  
  };
  res.json(data);
});