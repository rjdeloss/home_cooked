const express = require('express');

// Server
const app = express();
const port = process.env.port || 3000;

app.listen(port, () => console.log(`server is running on port:${port}`));

// Routes
app.get('/', (req, res) => res.send('Hello World'));
