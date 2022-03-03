const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')

app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))


app.get('/',(req,res)=>{
    console.log("get")
    res.sendFile(path.join(__dirname+'/index.html'))
})

app.post('/get-meta-data',(req,res)=>{
    // let vars={
    //     module_name:req.body.module_name,
    //     screen_name:req.body.screen_name
    // }
    // /:module_name/:screen_name

    let values={
        module_name:req.body.module_name,
        screen_name:req.body.screen_name
    }
    console.log("Success:" + req.body)
    // res.send(values)

    if(values.module_name === "trade license" && values.screen_name === "applied"){
        console.log("Hello")
        res.sendFile(path.join(__dirname+"/moduleFile.html"))
    }
})


app.listen(8080,()=>{
    console.log("http://localhost:8080")
})