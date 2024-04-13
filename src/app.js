import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app=express()
//URL thaka kono data asla sata "req.param"s r modhya asa.
// from kimba json data req.body thaka asa.

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limit:"16kb"}))
//we use "extended" cuzz in extended we can take nested object. 
app.use(express.urlencoded({extended:true,limit:"16kb"}))
//by"static" we store file in my server.
app.use(express.static("public"))
app.use(cookieParser())

export { app }