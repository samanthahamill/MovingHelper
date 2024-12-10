// start with 'node server.js'

const express = require('express');
const app = express();

// handling CORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", 
              // only allow incoming requests from this URL
               "http://localhost:4200");
    res.header("Access-Control-Allow-Headers", 
               "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// route for handling requests from the Angular client
app.get('/api/message', (req, res) => {
    res.json({ message: 
            'This is a default Express server. Change to actually return items!!' });
});

const PORT = 3001;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
