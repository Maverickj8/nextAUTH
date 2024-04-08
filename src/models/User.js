import { Schema, model, models, set } from "mongoose";

let date = new Date()
let today = `${date.getDay()+1}/${date.getMonth()}/${date.getFullYear()}`
set("strictQuery", false);
const userSchema = new Schema({
  email: { type: String, required: [true, "please enter your email"], unique: [true, "Email already exist"] },
  password: { type: String, default: "0000" },
  name: {type: String},
  age: {type: Number},
  gender: {type: String},
  role: {type: String, default: "user"},
  dateCreated: {type: String, default: today}
});
try {
  delete models.Users;
} catch (error) {
  console.log(error);
}
const Users = new model("Users", userSchema);

export default Users;
