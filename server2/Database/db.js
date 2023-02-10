import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()


 const Connection=async()=>{
  const URL=`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ac-2noikh8-shard-00-00.288dgcp.mongodb.net:27017,ac-2noikh8-shard-00-01.288dgcp.mongodb.net:27017,ac-2noikh8-shard-00-02.288dgcp.mongodb.net:27017/?ssl=true&replicaSet=atlas-w1tyod-shard-0&authSource=admin&retryWrites=true&w=majority`
    try {
      await mongoose.connect(URL,{useNewUrlParser: true,
        useUnifiedTopology: true,}) 
      console.log('database connected succesfully')
    } catch (error) {
       console.log('error from connection',error.message) 
    }
}

export default Connection