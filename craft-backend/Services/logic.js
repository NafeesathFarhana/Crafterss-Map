 //--------------------------------implementing logics in this file-----------------------------------------


 //import db in logic
 const db = require('./db') 

 
//add user
const addUser=(name,email, passwrd)=>{
   return db.User.findOne({email}).then((result)=>{
    if(result){
        return{
            statusCode:401,
            message:"User already Exists"
        }
    }
    else{
      const newuser = db.User({name,email,passwrd})
      newuser.save() //to save user
      return{
        statusCode:200,
        message:"User addedd successfully"
      }
    }
   })
}

//get User
const getUser = ()=>{
  return db.User.find().then((response)=>{
    if(response){
      return{
        statusCode:200,
        users:response//array of users
      }
    }
    else{
      return{
        statusCode:404,
        message:"No Such Employee Found"
      }
    }
  })
}

//add craft
const addcraft=(name,description,supplies,productimage,userId)=>{
  return db.products.findOne({name}).then((result)=>{
    if(result){
      return{
        statusCode:401,
        message:'craft already added'
      }
    }
    else{
      const newcraft=db.products({name,description,supplies,productimage,userId})
      newcraft.save()
      return{
        statusCode:200,
        message:'your work is saved'
      }
    }
  })
}
const getproducts = ()=>{
  return db.products.find().then((response)=>{
    if(response){
      return{
        statusCode:200,
        users:response//array of users
      }
    }
    else{
      return{
        statusCode:404,
        message:"No Such products Found"
      }
    }
  })
}

//delete a particular  products
const deleteProducts=(_id)=>{
  return db.products.deleteOne({_id}).then((result)=>{
    if(result){
      return{
        statusCode:200,
        message:'Product deleted Successfully'
      }
    }
    else{
      return{
        statusCode:404,
        message:'Product not found'
      }
    }
  })
}
//view particular products
const viewProducts=(_id)=>{
  return db.products.findOne({_id}).then((result)=>{
    if(result){
      return{
        statusCode:200,
        Product:result

      }
    }
    else{
      return{
        statusCode:404,
        message:'No such Products'
      }
    }
  })

}
//add knit
const addKnit=(name1,description1,supplies1,productimage1,userId)=>{
  return db.Knitproducts.findOne({name1}).then((result)=>{
    if(result){
      return{
        statusCode:401,
        message:'Knitting already added'
      }
    }
    else{
      const newknit=db.Knitproducts({name1,description1,supplies1,productimage1,userId})
      newknit.save()
      return{
        statusCode:200,
        message:'your work is saved'
      }
    }
  })
}
//get knit
const getknit = ()=>{
  return db.Knitproducts.find().then((response)=>{
    if(response){
      return{
        statusCode:200,
        users:response//array of users
      }
    }
    else{
      return{
        statusCode:404,
        message:"No Such knits Found"
      }
    }
  })
}
//delete knit
const deleteknit=(_id)=>{
  return db.Knitproducts.deleteOne({_id}).then((result)=>{
    if(result){
      return{
        statusCode:200,
        message:'Knit deleted Successfully'
      }
    }
    else{
      return{
        statusCode:404,
        message:'Knit not found'
      }
    }
  })
}
//view particular knit
const viewknit=(_id)=>{
  return db.Knitproducts.findOne({_id}).then((result)=>{
    if(result){
      return{
        statusCode:200,
        knit:result

      }
    }
    else{
      return{
        statusCode:404,
        message:'No such knits'
      }
    }
  })

}





module.exports={
    addUser, 
    getUser,
    addcraft,
    getproducts,
    deleteProducts,
    viewProducts,
    addKnit,
    getknit,
    deleteknit,
    viewknit
}

