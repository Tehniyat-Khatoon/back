import mongoose from "mongoose";
// cons
// connectDB.js
// const mongoose = require('mongoose');

const mongoURI ="mongodb+srv://tehniyatkhatoon17:BlvS5HfCdW9ptE5h@bookstore.2ria5fh.mongodb.net/"
// "mongodb+srv://khantehniyat83464928:TTtt1727@studentapisdata.hbyaf3g.mongodb.net/"
// "mongodb+srv://khantehniyat83464928:TTtt1727@studentapisdata.hbyaf3g.mongodb.net/?retryWrites=true&w=majority"
// 'mongodb+srv://khantehniyat83464928:TTtt1727@studentapisdata.hbyaf3g.mongodb.net/'; // Replace with your actual MongoDB URI

const connectDB = async () => {
  try {
   await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName:"Cources"
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection failed:', error);
  }
};




// const uri = 'mongodb+srv://tehniyatkhatoon17:BlvS5HfCdW9ptE5h@bookstore.2ria5fh.mongodb.net/?retryWrites=true&w=majority';

// const options = {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     serverSelectionTimeoutMS: 5000,
//     autoIndex: false, // Don't build indexes
//     maxPoolSize: 10, // Maintain up to 10 socket connections
//     serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
//     socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
//     family: 4 // Use IPv4, skip trying IPv6
// }

// const connectDB = () => {
//     mongoose.connect(uri, options, (err, db) => {
//       if (err) console.error(err);
//       else console.log("database connection")
//     })
// }

// mongoose.connect("mongodb+srv://tehniyatkhatoon17:BlvS5HfCdW9ptE5h@bookstore.2ria5fh.mongodb.net/?retryWrites=true&w=majority", {useNewUrlParser: true});

mongoose.set('strictQuery', true);

export default connectDB
