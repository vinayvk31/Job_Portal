import express from "express";
import dotenv from "dotenv"
import cors from 'cors'
import morgan from "morgan";
//files import
import authRouter from './routes/auth.js';
import jobRouter from './routes/jobs.js';

// DOT ENV CONFIG 
dotenv.config({})

//REST OBJECT
const app = express()

//MIDDLEWARES
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

//config-files
// const db = require('./models')


// routers
app.use('/api/v1/auth',authRouter)
app.use('/api/v1/job',jobRouter)

//server start
  app.listen(process.env.Port, () => {
    console.log(`Server is running in ${process.env.DEV_MODE} Mode on port:${process.env.Port}`);
  });

