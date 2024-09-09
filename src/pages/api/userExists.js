import MongoDb from "@/lib/mongodb";
import User from "@/models/models";

export default async function Handle(req,res) {
   if(req.method === "POST"){
      const { email } = req.body;
      await MongoDb();
      const user = await User.findOne({ email }).select("_id")
      console.log(user)
      return res.json({user})
   } else {
     throw new Error("Error in fetching Data in UserExsists")
   }
}
