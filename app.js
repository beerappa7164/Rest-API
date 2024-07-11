const express = require('express');


//load environment file
require('dotenv').config();

//setting te db connection
require('./config/db')

const apiRoutes = require('./routes/api.routes');




const app = express();
app.use(express.json())

//api routes
app.use('/api', apiRoutes)

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(` My Server is running at http://localhost:${port}`);
});



