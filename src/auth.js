import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import dbConnect from "./models";
import bcrypt from "bcrypt";

const options = {
  session: {
    strategy: "jwt",
    maxAge: 50000,
    updateAge: 50000,
    generateSessionToken: () => {
        return randomUUID?.() ?? randomBytes(32).toString("hex")
      }
  },
  secret: process.env.SECRET,
  jwt: {},
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        //   username: { label: "Username", type: "text", placeholder: "jsmith" },
        //   password: {  label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Add logic here to look up the user from the credentials supplies
        const { email, password } = credentials;
        const { Users } = await dbConnect();
        const user = await Users.findOne({ email });

        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          const match = await bcrypt.compare(password, user.password);

          if (match) {
            return { id: user.id, email: user.email, name: user.name };
          } else {
            // throw new Error("Incorrect username or password");
            return null
          }
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
        //   throw new Error("Incorrect username or password");
        return null

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
  ],
};
export const {
  handlers: { GET, POST },
  auth,
} = NextAuth(options);
