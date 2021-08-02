const express=require('express');
 const plantdata=require('./model/plantdata.json');

const app=express();

const plantss=[{id:1,plant:"Micaia"},{id:2,plant:"Embondeiro"}]

// console.log(plantdata);
app.get("/plants",(req,res)=>{
    const page=req.query.page;
    const limit=req.query.limit;
    const startIndex=(page-1)*limit;
    const endIndex=page*limit;
    const result=plantdata.plants.slice(startIndex,endIndex);

    res.json(result);
})


app.listen(3000,()=>{
    console.log('server started on port 3000');
})