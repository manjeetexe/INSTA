// Import express
const express = require('express');

// Create an express app
const app = express();

// Define a "Hello World" route
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Set the port to listen on (e.g., port 3000)
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});