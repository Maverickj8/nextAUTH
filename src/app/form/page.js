"use client"

import { useState } from "react"

export default function Form() {

    const [formData, setFormData] = useState({email: "", password: ""})
    
    function handleForm() {
       console.log("filled");
    }
  return(
    
     <form className="form" onSubmit={(event) =>{
        event.preventDefault()
        fetch("/api/login", {
            method: 'POST',
            body: JSON.stringify(formData)
        })
        .then((res) => console.log(res))
        }}>
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(event) => {
        setFormData((prev) => ({...prev, email:event.target.value}))
          }}
          name="email"
        />
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(event => {
            setFormData((prev) => ({...prev, password: event.target.value}))
          })}
          name="password"

        />
         <button onClick={handleForm}>submit</button>
     </form>
    
  )
}