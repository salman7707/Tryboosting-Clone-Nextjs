import bcrypt from "bcryptjs";
import MongoDb from "@/lib/mongodb";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/models";
import NextAuth from "next-auth";
export const Data = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials) {
        try {
            const { email, password } = credentials;
            await MongoDb();
            const user = await User.findOne({email});
            // console.log("Fetched Data",user)
            if (!user) {
              return null;
            }
            const checkPassword = await bcrypt.compare(password, user.password);
            
            if (!checkPassword) {
              return null;
            } 
            console.log('User Login Successfully')
            return user
        } catch (error) {
            console.log("error in data fetching",error)
        }
      },
    }),
  ],
  pages:{
    signIn:'/login' 
  },
};
const handler =NextAuth(Data)
export default handler
