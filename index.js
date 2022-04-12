import express from "express";
import GoogleAPI from "./Service/googleAPI.js";

import dotenv from 'dotenv'
dotenv.config()


const app = express()
const port = 3000


app.use(express.json())

app.get('/', async (req,res)=>{
    const address = 'Rua+19+de+Fevereiro,+34+Botafogo,+Rio+de+Janeiro+RJ,+22280​030'
    const add2 = '1600+Amphitheatre+Parkway,+Mountain+View,+CA'
    const add3 = '1600+Amphitheatre+Parkway,+Mountain+View,+CA'
    const api = new GoogleAPI()
    res.json(await api.coordinates(address))
    //res.json(await api.coordinatesGroup(address))

})


app.listen(port, ()=>{
    console.log(`Open server: http://localhost:${port}`);
})