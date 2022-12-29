const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URI,{useNewUrlParser:true,useUnifiedTopology:true,});

    console.log(`MongoDB is now Connected ${conn.connection.host}`.cyan.underline.bold);
 
}
module.exports = connectDB;