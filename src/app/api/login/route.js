import bcrypt from "bcrypt"
import dbConnect from "@/models";

export async function POST(req) {
    const res = await req.json()
    const {Users} = await dbConnect()
    const {email, password} = res
     const user = await Users.findOne({email})
   const match = await bcrypt.compare(password, user.password)
    console.log(match);
     return Response.json(user) 
}