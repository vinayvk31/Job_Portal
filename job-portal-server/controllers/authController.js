import { db } from "../db/db.js"
import { comparePassword, hashPassword } from "../utils/authUtils.js";
import JWT from 'jsonwebtoken'

export const registerController = async(req,res)=>{

    // destructuring
    const {username,name, email, password} = req.body;

    //validaition
    if(!name || !username || !email || !password){
         return res.status(200).send({message: "All the fields are required..", success: true})
    }

   //CHECK EXISTING USER

   var q = 'SELECT * FROM user WHERE email = ? OR username = ?';

   db.query(q, [email,username], (err,data)=>{
    if(err) return res.status(400).send({err, success: false})
    if(data.length) return res.status(200).send({data,message: "Already registered.", success: true})
   })

   //hasghing the password
   const hashedPassword =await  hashPassword(password);
   var q = "INSERT INTO user(`username`,`name`,`email`,`password`) VALUES (?)";
   const Values = [username,name, email,hashedPassword];
   db.query(q,[Values],(err,data)=>{
    if(err) return res.status(400).send({err, success: false});
    return res.status(201).send({data, message: "user created.", success: true})
   })

   
}
// registerCompanyController
export const registerCompanyController = async(req,res)=>{

    // destructuring
    const {name,website,role, email, password} = req.body;

   //CHECK EXISTING company

   var q = 'SELECT * FROM company WHERE email = ? AND role = ?';

   db.query(q, [email,name], (err,data)=>{
    if(err) return res.status(400).send({err, success: false})
    if(data.length) return res.status(200).send({data,message: "Already registered with this email.", success: true})
   })

   //hasghing the password
   const hashedPassword =await  hashPassword(password);
   var q = "INSERT INTO company(`name`,`website`,`role`,`email`,`password`) VALUES (?)";
   const Values = [name,website,role, email,hashedPassword];
   db.query(q,[Values],(err,data)=>{
    if(err) return res.status(400).send({err, success: false});
    return res.status(201).send({data, message: "user created.", success: true})
   })

   
}

// login controller user
export const loginController = async(req,res)=>{

       // destructuring
       const {email, password} = req.body;

       //validaition
       if( !email || !password){
        return res.status(200).send({message: "All the fields are required..", success: true})
   }
  

     var q = 'SELECT * FROM user WHERE email = ?';

     db.query(q, [email], (err,data)=>{
      if(err) return res.status(400).send({err, success: false})
      if(data.length===0) return res.status(200).send({data,message: "user doesn't exist.", success: true})
       
        const match = comparePassword(password, data[0].password);
        if(match===false) return res.status(200).send({message: "wrong email or password.", success: true})
        
        const token = JWT.sign({is:data[0].id},"JWTSKEY",{expiresIn: "7d"});

        return res.status(201).send({data,message: "user login succesfully.",token, success: true})
       

     })
}
// login controller company
export const loginCompanyController = async(req,res)=>{ 
    // destructuring
    const {role,email, password} = req.body;

    

    var q = 'SELECT * FROM company WHERE email = ? AND role = ?';

    

    db.query(q, [email,role], (err,data)=>{
     if(err) return res.status(400).send({err, success: false})
     if(data.length===0) return res.status(200).send({data,message: "entity doesn't exist.", success: false})
      
       const match = comparePassword(password, data[0].password);
       if(match===false) return res.status(200).send({message: "wrong user name or role or password.", success: true})
       if(data[0].is_verified===0) return res.status(200).send({message: "entity not yet verified, our admin will verify it soon.", success: true})
       const token = JWT.sign({is:data[0].id},"JWTSKEY",{expiresIn: "7d"}); 
       return res.status(201).send({data,message: "entity login succesfully.",token, success: true})
      
})
}
 