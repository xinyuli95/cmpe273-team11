const mongoose = require("mongoose");

const options = { user : "root", pass : "123456", auth : {authMechanism: 'MONGODB-CR'} }

var conn ='mongodb://localhost:27017/Stackoverflow';

const url =
  "mongodb+srv://hangyuan:Xhy123456@cluster0.ybryy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
module.exports.connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      // useFindAndModify: false,
      useUnifiedTopology: true,
      // useCreateIndex: true,
    })
    .then(() => console.log("MongoDB is connected successfully"))
    .catch((err) => console.log("Error: ", err));
};
