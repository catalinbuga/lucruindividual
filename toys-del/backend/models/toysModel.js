import mongoose from "mongoose";

const toysSchema = new mongoose.Schema({
    name: {type:String,required:true},
    description: {type:String,required:true},
    price:{type:Number,required:true},
    image:{type:String,required:true},
    category:{type:String,required:true}
})

const toysModel = mongoose.models.toys || mongoose.model("toys",toysSchema)

export default toysModel;