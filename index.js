const express = require('express');
const app = express();

const celsiusToFahrenheit = ((cel)=>cel*1.8 + 32);

app.get('/convert',(req,res)=>{
    const {celsius} = req.query;
    if(!celsius)
    {
        return req.statusCode(400).json({error:"Please provide value"});
    }
    const farenhite = celsiusToFahrenheit(Number(celsius));

    res.json({celsius:Number(celsius),farenhite,massage:"Success"});
})

const PORT = 8000;
app.listen(PORT,()=>{
    console.log(`Server is running ${PORT}`);
})

console.log("Hello World");