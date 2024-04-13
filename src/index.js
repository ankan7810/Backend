import dotenv from 'dotenv'
import connectDb from './db/index.db.js';
import {app} from './app.js'

dotenv.config({
    path:"./.env"
})

connectDb()
.then(()=>{
    app.listen(process.env.PORT || 8000 ,()=>{
        console.log((`server is running at PORT ${process.env.PORT}`));
    })
})
.catch((error)=>{
    console.log("MONGODB connection failed",error);
})

/*
const app=express()
( async() =>{
    try {
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       //listner:
       app.on("error",(error)=>{
        console.log("ERROR",error);
        throw error
       })
       app.listen(process.env.PORT,()=>{
        console.log((`App is listening on PORT${process.env.PORT}`));
       })
    } catch (error) {
        console.error("Error",error);
        throw error
    }
})()
*/