"use client";
import { useState } from "react";

export default function Contacts() {
  const [contact, setContact] = useState({ email: "", text: "" });
  
  function handleContact() {
    console.log("contacts");
  }
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        fetch("/api/conts", {
            method: "POST",
            body: JSON.stringify(contact)
        })
      }}
    >
      <input
        type="email"
        placeholder="email"
        value={contact.email}
        onChange={(event) => {
          setContact((prev) => ({ ...prev, email: event.target.value }));
        }}
      />
      <input 
      type="text"
      placeholder="name" 
      value={contact.text}
      onChange={(event) => {
        setContact((prev) => ({...prev, text: event.target.value}))
      }}

      />
      <button onClick={handleContact}>submit</button>
    </form>
  );
}
