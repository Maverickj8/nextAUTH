import { models, Schema, model } from "mongoose";

const date = new Date()
const currentDate = `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`
const UserSchema = new Schema({
    amount: {type: Number, required: [true, "Enter amount"]},
    name: {type: String, required: [true, "Enter name of item"]},
    date: {type: String,  default: currentDate}
})
try {
    delete models.transaction;
} catch (error) {
    console.log(error.message);
}
const transaction = new model("transaction", UserSchema)

export default transaction;
