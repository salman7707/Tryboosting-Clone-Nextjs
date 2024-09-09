import mongoose from "mongoose"

const MongoDb = async () => {
   try {
     await mongoose.connect(process.env.MONGO_URL)    
     console.log("database connected successfully")
   } catch (error) {
      console.log("failed to connect Database",error)
      throw new Error("Database connected failed")
   }      
}

export default MongoDb;
