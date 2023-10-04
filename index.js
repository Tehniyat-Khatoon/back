import express from 'express'
import mongoose from "mongoose";
import studentRouter from './Routes/studentRouter.js';

import bodyParser from 'body-parser';
import addUserRouter from './Routes/userRouter.js';
import addmissionForm1Router from './Routes/addmissionForm1Router.js';
import enquiryFormRouter from './Routes/enquiryFormRouter.js';

import dotenv from 'dotenv'
import connectDB from './DB/ConnectDb.js';
dotenv.config()

const app = express()
const port = process.env.PORT || '3000'


//data base connection start
const mongoURI =process.env.DATABASE_URL
const DBNAME=process.env.DBNAME
connectDB(mongoURI,DBNAME);



// mongoose.connect("mongodb+srv://tehniyatkhatoon17:BlvS5HfCdW9ptE5h@bookstore.2ria5fh.mongodb.net/?retryWrites=true&w=majority", {useNewUrlParser: true});

// mongoose.set('strictQuery', false);
//data base connection end

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json());
app.use(express.static('public'))

//load routes
app.use('/student', studentRouter)
app.use('/user', addUserRouter)
app.use('/admission', addmissionForm1Router)
app.use('/enquiry', enquiryFormRouter)




app.listen(port, () => {
    console.log(`server started at ${port}`);
})