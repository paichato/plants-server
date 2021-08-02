const express=require('express');
 const plantdata=require('./model/plantdata.json');

const app=express();

const plantss=[{id:1,plant:"Micaia"},{id:2,plant:"Embondeiro"}]

// console.log(plantdata);
app.get("/plants",(req,res)=>{
    const _page=parseInt(req.query._page);
    const _limit=parseInt(req.query._limit);
    const startIndex=(_page-1)*_limit;
    const endIndex=_page*_limit;
    // const result=plantdata.plants.slice(startIndex,endIndex);
console.log(_page);
    const result={};
   
    if(endIndex<plantdata.plants.length){
        result.next={
            page:_page+1,
            limit:_limit
        };
    };
    if(startIndex>0){
        result.previous={
            page:_page-1,
            limit:_limit,
        };
    }
    result.results=(_page && _limit)?plantdata.plants.slice(startIndex,endIndex) :plantdata.plants ;
   
    res.json(result);
})


app.listen(3000,()=>{
    console.log('server started on port 3000');
})