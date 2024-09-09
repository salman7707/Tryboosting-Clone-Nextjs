import MongoDb from "@/lib/mongodb";
import User from "@/models/models";
import bcrypt from "bcryptjs"
async function Handler(req, res) {
   if(req.method === "POST"){
     const {name, email, password} = req.body;
     const hashedPassword = await bcrypt.hash(password,10)
     await MongoDb();
     await User.create({name, email, password:hashedPassword});
     return res.status(200).json({message:"User Created Successfully"})
   } else {
     return res.status(401).json({message:"Err in Api in register.js"})
   }
}

export default Handler;
