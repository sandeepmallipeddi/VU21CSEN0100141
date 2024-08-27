const express=require('express')
const bodyParser=require('body-parser')


const mongoose = require('mongoose');

const connectDB = async () => {
    try {

        await mongoose.connect('mongodb+srv://bhuvanesh1440:RhV9dY3GzBkmTJqz@nechostel.pw26hue.mongodb.net/hostel', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            maxPoolSize:10
        });
        console.log('MongoDB connection established');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
        process.exit(1);
    }
};

  


const app=express()



app.get('/',(req,res)=>{
    res.send("Hello World!")
})

app.listen(5000,(req,res)=>{
    console.log("Server is running on http://localhost:5000")
    connectDB()
})