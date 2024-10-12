import mongoose from "mongoose";

mongoose.connect("mongodb+srv://Adalid:iaqa020826@cluster0.nodsd.mongodb.net/drinks_db?retryWrites=true&w=majority&appName=Cluster0")
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.error(err))

export default mongoose;