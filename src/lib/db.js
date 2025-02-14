import mongoose from "mongoose";

 export const CarURL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"
 

const MongoDB = async()=>{
    try{
        await mongoose.connect('mongodb://localhost:27017/WindCar');
        console.log('Connected to MongoDB');
    }catch(err){
        console.log(err)
    }
}

 export const db  = {MongoDB}