//import express
const express = require('express');

//import cors
const cors = require('cors');

//create a server applicaion using the express
const serverApp = express()

//defining path
const path=require('path')

//define a static route to sever images from the uploads folder
serverApp.use('/uploads' ,express.static(path.join(__dirname,'/uploads')))

//importing logic
const logic = require('./Services/logic')


// importing multer
const multer = require('multer')

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        return cb(null,'./uploads')
    },
    filename:function(req,file,cb){
        return cb(null,`${Date.now()}_${file.originalname}`)
    }
})
//////////////###################forknit##################3//////////////////////////



const add = multer ({
    storage:storage
    
})

//use cors and express
serverApp.use(cors({ //to connect two different cors
    origin:'http://localhost:3000'
}))

serverApp.use(express.json())


//server listen
serverApp.listen(8000,()=>{
    console.log('server listening on port 8000');
})

// API call to add user
serverApp.post('/addUsers',(req,res)=>{
    logic.addUser(req.body.name,req.body.email,req.body.passwrd).then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

//API call to get user
serverApp.get('/getUsers',(req,res)=>{
    logic.getUser().then((result)=>{
   res.status(result.statusCode).json(result) //array of employees
    })  
})

//API call to add craft
serverApp.post('/addcraft',add.single('productimage'),(req,res)=>{
    const {name,description,supplies,userId}=req.body
    // const userId = req.params.userId;
    const productimagepath=req.file?req.file.filename:null
    logic.addcraft(name,description,supplies,productimagepath,userId).then((result)=>{
        res.status(result.statusCode).json(result)
        console.log(req.file);
        console.log(req.body);
    })
})

//API call to get products
serverApp.get('/getproducts',(req,res)=>{
    logic.getproducts().then((result)=>{
   res.status(result.statusCode).json(result) //array of employees
    })  
})

//API call to delete products
serverApp.delete('/deleteproducts/:id',(req,res)=>{
    logic.deleteProducts(req.params.id).then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

// API call to view particular products
serverApp.get('/getproducts/:id',(req,res)=>{
    logic.viewProducts(req.params.id).then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

//API call to add knits
serverApp.post('/addknit',add.single('productimage1'),(req,res)=>{
    const {name1,description1,supplies1,userId}=req.body
    // const userId = req.params.userId;
    const productimagepath=req.file?req.file.filename:null
    logic.addKnit(name1,description1,supplies1,productimagepath,userId).then((result)=>{
        res.status(result.statusCode).json(result)
        console.log(req.file);
        console.log(req.body);
    })
})
//API call to get knits
serverApp.get('/getknit',(req,res)=>{
    logic.getknit().then((result)=>{
   res.status(result.statusCode).json(result) //array of employees
    })  
})


//API call to delete knits
serverApp.delete('/deleteknit/:id',(req,res)=>{
    logic.deleteknit(req.params.id).then((result)=>{
        res.status(result.statusCode).json(result)
    })
})
// API call to view particular knits
serverApp.get('/getknit/:id',(req,res)=>{
    logic.viewknit(req.params.id).then((result)=>{
        res.status(result.statusCode).json(result)
    })
})
