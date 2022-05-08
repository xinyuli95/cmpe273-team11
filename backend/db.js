const mongoose = require("mongoose");

const url =
  "mongodb+srv://sckjaveed:Javeed123@stackcluster.6gbwi.mongodb.net/stackoverflowjaveed?retryWrites=true&w=majority";
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
