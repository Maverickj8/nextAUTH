"use client"

import { useEffect, useState } from "react"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link"

export default function Display() {
    const [users, setUsers] = useState([])
    useEffect(() =>{
        fetch("/api/users")
        .then((res) => res.json())
        .then((data) => {
            if (data.message) {
                toast("An error occured");
                return 
            }
            setUsers(data)
        })
    }, [users])
    return(
        <>
        <h1>User profiles</h1>
        <ToastContainer />
        <div className="contact">
        {users.map((user, index) =><Link className="link" href={"/display/"+ user._id} key={index} >{user.email} </Link> )}
        </div>
        </>
    )
}