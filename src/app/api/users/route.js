import dbConnect from "@/models";

// READ
// export async function GET(req) {
//     const email = req.nextUrl.searchParams.get('email');
//   try {
//     const { Users } = await dbConnect();
//     const users = await Users.findOne({ email: email }, "-password");
//     return Response.json(users);
//   } catch (error) {
//     console.log(error.message);
//     return Response.json({message:`Error occured due to ${error.message}`, status: false})
//   }
// }

// UPDATE

// export async function GET(req) {
//   const email = req.nextUrl.searchParams.get("email");
//   try {
//     const { Users } = await dbConnect();
//     // const updateUser = await Users.findOneAndUpdate(
//     //   { email: "albertmaverick99@gmail.com" },
//     //   { email: "chisomal@gmail.com" }, { new: true}
//     // );
//     const updateUser = await Users.findOne({
//       email: "albertmaverick99@gmail.com",
//     });
//     updateUser.password = "2023";
//     updateUser.save((error, user) => {
//       console.log(error);
//      return Response.json(user);
//     });
//     return Response.json(updateUser);
//   } catch (error) {
//     console.log(error.message);
//     return Response.json({ message: `Error from ${error.message}` });
//   }
// }

  // DELETE

  // export async function GET() {
  //   const { Users } = await dbConnect()
  //   const deleteUser = await Users.deleteOne({email: "albertmaverick99@gmail.com"})
  //   return Response.json(deleteUser)
  // }

  export async function GET(){
   try {
     const { Users } = await dbConnect()
     const findData = await Users.find({})
     return Response.json(findData)
   } catch (error) {
     return Response.json({message: error.message})
   }
  }