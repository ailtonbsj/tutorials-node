const express = require('express');
const bodyParser = require('body-parser');

const loginRouter = require('./routes/login');

const app = express()

app.set("view engine", "ejs");

// enable application/json
app.use(express.json());
// enable application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));  

app.use('/', loginRouter);

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})