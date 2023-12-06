import mongoose from "mongoose";
const collection = "users"
const userSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String
})
const userModel = mongoose.model(collection, userSchema)
export default userModel