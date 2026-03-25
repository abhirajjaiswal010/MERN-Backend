
import express from 'express'
import cors from 'cors'


const app=express();
const port=3001;
app.use(cors());
app.get('/',(req,res)=>{
    res.send('Hello from Backend!')
});

app.get('/api/data',(req,res)=>{
    res.json([{message: 'This is some data from the backend.'}])});

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
});