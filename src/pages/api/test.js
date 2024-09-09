import MongoDb from '@/lib/mongodb'

async function Handler(req, res) {
    try {
        // await MongoDb();
        return res.status(200).json({message:"Database connected Successfully"})       
    } catch (error) {
        return res.status(401).json({message:"Db connection Failed"})
    }    
}
export default Handler;