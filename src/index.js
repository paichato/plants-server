const express=require('express');
 const plantdata=require('./model/plantdata.json');
 const paginate=require('./middleware/paginate')

const app=express();

// app.use(paginate);



app.get("/plants",paginate(plantdata.plants) ,(req,res)=>{

    res.json(res.paginatedResult);
})

// app.post("/plant",paginate)



app.listen(3000,()=>{
    console.log('server started on port 3000');
})