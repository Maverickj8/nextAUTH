import { useSession } from "next-auth/react"
import { getServerSession } from "next-auth/next"
import { options } from "../api/auth/[...nextauth]/route"
export default async function Dashboard()  {
    const session = await getServerSession(options)
    console.log(session);
    // const {data: session, status} = useSession()
    // if (status === "authenticated"){
    //     return <p>Signed in as {session.user.email}</p>
    // }
    return (
        <a href="/api/login">Sign in</a>
    )
}