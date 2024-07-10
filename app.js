const express = require('express');


//load environment file
require('dotenv').config();
const app = express();

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(` My Server is running at http://localhost:${port}`);
});



