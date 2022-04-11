import express from "express";

const app = express()
const port = 3000

app.use(express.json())

app.get('/',(req,res)=>{
    res.send('Rota Get')
})

app.listen(port, ()=>{
    console.log(`Open server: http://localhost:${port}`);
})