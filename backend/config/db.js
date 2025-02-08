import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://kunalkumarsharma202:ABCD1234@cluster0.50xqp.mongodb.net/food-del ').then(()=>console.log("DB Connected"));
}