"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

export default function Sign() {
  const [signData, setSignData] = useState({ email: "", password: "" });
  const router = useRouter();
  function handleSubmit(event) {
    event.preventDefault();

    signIn("credentials", {
      email: signData.email,
      password: signData.password,
      redirect: false,
      callbackUrl: "http://localhost:3000/login"
    }).then((res) => {
      console.log(res);
      if (!res.error && res.url ) {
        toast("Login Successfull");
        router.push("/dashboard");      
      } else if (res.error == 'CredentialsSignin') {
        toast("Invalid Credentials");
      }
      return;
    });
    //  fetch("/api/login", {
    //   method: "POST",
    //   body: JSON.stringify(signData)
    //  })
    //  .then((res) => res.json())
    //  .then((data) => console.log(data))
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={signData.email}
        onChange={(event) => {
          setSignData((prev) => ({ ...prev, email: event.target.value }));
        }}
      />
      <input
        type="password"
        value={signData.password}
        onChange={(event) => {
          setSignData((prev) => ({ ...prev, password: event.target.value }));
        }}
      />
      <ToastContainer />
      <button type="submit">sign in</button>
    </form>
  );
}
