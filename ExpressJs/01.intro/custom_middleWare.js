const express = require('express');
const app = express();



const requestTimeStampLogger=(req,res,next)=>{
    const timeStamp=new Date().toISOString();
   console.log(`[${timeStamp}] from ${req.method} to  ${req.url}`);
  next();
    
}
app.use(requestTimeStampLogger)

app.get('/', (req, res) => {
  res.send('Home Page');
});

app.get('/users', (req, res) => {
  res.send('Users Page');
});
app.get('/product', (req, res) => {
  res.send('product Page');
});

// Server
app.listen(3000, () => {
  console.log('http://localhost:3000');
});