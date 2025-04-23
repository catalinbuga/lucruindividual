import mongoose from "mongoose";

export const connectBD = async () => {
    await mongoose.connect('mongodb+srv://smoki:125612abc@cluster0.v7ekkfc.mongodb.net/toys-del').then(()=>console.log("DB Connected"));
}