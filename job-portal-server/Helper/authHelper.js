const bcrypt= require('bcrypt')

const hashPassword = async (password) => {
    try{
        const saltRound = 10;
        const hashedPassword = await bcrypt.hash(password,saltRound);
        return hashedPassword;

    }catch(e){
        console.log(e);
    }
}

const comparePassword = async(password, hashedPassword)=>{
    try{
        return  bcrypt.compare(password, hashedPassword);
    }catch(e){
        console.log("error is thrown in bcrypt commpare"); 
    }

   
    
}

module.exports = {
    hashPassword,comparePassword
  };