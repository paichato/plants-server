const express=require('express');
 const plantdata=require('./model/plantdata.json');
 const paginate=require('./middleware/paginate')
const envs=require('./model/server.json')
const app=express();

// app.use(paginate);

let port=process.env.PORT || 3000;

app.get("/plants",paginate(plantdata.plants) ,(req,res)=>{

    res.json(res.paginatedResult);
});

app.get('/plants_environments',(req,res)=>{
    res.json(envs.plants_environments);
})

// app.post("/plant",paginate)



app.listen(port,()=>{
    console.log('server started on port 3000');
})