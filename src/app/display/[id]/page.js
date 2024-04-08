'use client'
import { useState } from "react"

export default function Name({params}) {
   const [inputs, setInputs] = useState({email: "", name: ""})
   return(
      <>
      <form className="form">
        <h1>Reset Details</h1>
        <input
          type="email"
          placeholder="Enter your email"
          value={inputs.email}
          onChange={(event) => {
            setInputs((prev) =>({...prev, email: event.target.value}))
          }}
        />
        <input
          type="text"
          placeholder="Enter your name"
          value={inputs.name}
          onChange={(event) => {
            setInputs((prev) =>({...prev, name: event.target.value}))
          }}
        />
         <button type="submit">Reset</button>
      </form>
      </>

   )
}