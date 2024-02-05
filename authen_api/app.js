const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoute = require('./src/route/authRoute')
const app = express();
const mongoose = require('mongoose')


const corsOptions = {
    origin: ['http://localhost:1234', 'http://google.com'],
};

app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

// mongoose connection
mongoose.connect('mongodb://127.0.0.1:27017/e-commerce', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log("MongoDB connected...")).catch((error) => console.log(error))

// app.use(jwt);
app.use(authRoute)

app.listen(3000, () => {
    console.log(`Server is running on 3000`);
});