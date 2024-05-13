import mongoose from 'mongoose'

mongoose.connect("mongodb://localhost:27017/defence").then(() => { console.log("connected"); }).catch((err) => { console.log(err); })

const user = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    dob: Date,
    gen: String,
    age: Number
})

const admin = mongoose.Schema({
    username: String,
    password: String
})

const userschema = mongoose.model("Users", user)
const adminSchema = mongoose.model("Admin", admin)

export { userschema, adminSchema }