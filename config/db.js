const mongoose = require('mongoose');

const connectionURI = "mongodb+srv://rijal:pass123@cluster0-7vyxb.mongodb.net/test?retryWrites=true&w=majority";

const InitiateMongoServer = async () => {
    try {
      await mongoose.connect(connectionURI, {
        useNewUrlParser: true
      });
      console.log("Connected to DB !!");
    } catch (e) {
      console.log(e);
      throw e;
    }
  };
  
  module.exports = InitiateMongoServer;