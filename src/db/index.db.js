import mongoose from 'mongoose'
import { DB_NAME } from '../constant.js'; 

const connectDb=async()=>{
    try {
        //"connect" method take URL like(URL/db_name)
      const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
      console.log(`\n mongodb connected !! DB HOST: ${connectionInstance.connect.name}`);
    //   console.log(connectionInstance);
    } catch (error) {
        console.log(("Error",error));
        //in "process" reference of our current process is going on.
        process.exit(1)
    }
}

export default connectDb;