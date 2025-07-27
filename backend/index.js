import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js"; 

import cors from "cors";

dotenv.config(); // ✅ Load .env first

const app = express();
app.use(express.json())
app.use(cors())
const PORT = process.env.PORT || 3000; // ✅ Now it will work
const URI=process.env.mongoDBURI

//connect server to mongoDB database
try{
    mongoose.connect(URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true


    })
    console.log("connected to database")

}
catch(error){
    console.log(error)

}
//defining routes

app.use("/book",bookRoute)
app.use("/user",userRoute)

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
