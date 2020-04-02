const express = require('express');
const mongoose = require('mongoose');

// Server
const app = express();
const port = process.env.port || 3000;
const db = require('./config/keys').mongoURI;


mongoose
	.connect(db, { useNewUrlParser: true })
	.then(() => console.log('connected to database successfully'))
	.catch(err => console.log(err));

app.listen(port, () => console.log(`server is running on port:${port}`));

// Routes
app.get('/', ( req, res) => res.send('Hello World'));
