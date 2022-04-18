const express = require('express') //express module
const app = express(); // create an express app
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const cors = require('cors'); //use cors to allow cross origin resource sharing
app.use(cors({origin: 'http://localhost:3000', credentials: true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
// const db = require("./Utils/config.js");

//use express session to maintain session data
app.use(session({
    secret: 'cmpe273_kafka_passport_mongo', // change
    resave: false, // Forces the session to be saved back to the session store, even if the session was never modified during the request
    saveUninitialized: false, // Force to save uninitialized session to db. A session is uninitialized when it is new but not modified.
    duration: 60 * 60 * 1000,    // Overall duration of Session : 30 minutes : 1800 seconds
    activeDuration: 5 * 60 * 1000
}));

//Allow Access Control
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    res.setHeader('Cache-Control', 'no-cache');
    next();
});




//connect to mongoDB
const { mongoDB } = require('./Utils/config'); //dotenv.config();
const mongoose = require('mongoose');
mongoose.connect(mongoDB ,(err, res) => { //mongoose.connect(process.env.MONGO_URL) for better security
    if (err) {
        console.log(err);
        console.log(`MongoDB Connection Failed`);
    } else {
        console.log(`MongoDB Connected`);
    }
});


//connect to mysql
const {sqlDB} = require('./Utils/config');
sqlDB.connect((err, res) => {
    if (err) throw err;
    console.log("Connected");
});

//user route
const userRoute = require("./routes/user");
// const adminRoute = require("./routes/admin");
// const messageRoute = require("./routes/message");
// const questionRoute  = require("./routes/question");
// const tagRoute  = require("./routes/tags");

app.use("/user", userRoute);
// app.use("/admin", adminRoute);
// app.use("/message", messageRoute);
// app.use("/question", questionRoute);
// app.use("/tags", tagRoute);




app.listen(3001);
console.log("Server Listening on port 3001");