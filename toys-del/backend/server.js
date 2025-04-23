import express from "express"
import cors from "cors"
import { connectBD } from "./config/db.js"
import toysRouter from "./routes/toysRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js"



// app configurare
const app = express()
const port = 4000

// middleware 
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors())

//db conectare
connectBD();

// api endpoint
app.use("/api/toys",toysRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)

app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})