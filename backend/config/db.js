import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://kunalkumarsharma202:kunal1234@cluster0.eiwaxlk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>console.log("DataBase connected"));
}

// 