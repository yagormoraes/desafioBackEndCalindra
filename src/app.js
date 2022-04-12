import express from "express";
import dotenv from 'dotenv'
import geolocationController from "./Controller/geolocationControlle.js";


dotenv.config()

const app = express()
app.use(express.json())

geolocationController(app)

    
export default app