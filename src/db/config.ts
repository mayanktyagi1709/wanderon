import mongoose from "mongoose";

export default function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDB connected successfully");
    });

    connection.on('error', (error)=> {
      console.log("MongoDB connection error");
      console.group(error);
    })
  } catch (error) {
    console.log("Something went wrong");
    console.error(error);
  }
}
