import express from "express";
import GoogleGeo from "./service/googleAPI.js";

import dotenv from 'dotenv'
dotenv.config()


const app = express()
const port = 3000


app.use(express.json())

app.get('/', async (req,res)=>{
    const endereco = '1600+Amphitheatre+Parkway,+Mountain+View,+CA'
    const api = new GoogleGeo()
    res.json(await api.coordenadas(endereco))

})


app.listen(port, ()=>{
    console.log(`Open server: http://localhost:${port}`);
})