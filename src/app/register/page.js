"use client";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from 'next/navigation'
import {signIn} from 'next-auth/react'

const Form = () => {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    age: 0,
    gender: "",
  });
  const [loading, setLoading] = useState(false);

  return (
    <>
    <form className="form"
      onSubmit={(event) => {
        event.preventDefault();
        // a function that shows a spining circle
        setLoading(true);
        fetch("/api/create", {
          method: "POST",
          body: JSON.stringify(formData),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.status) {
              toast("User created successfully");
              setFormData({ email: "", password: "" });
              router.push("/display")
            } else {
              toast("User creation failed");
            }
          })
          .catch((error) => {})
          .finally(() => {
            setLoading(false);
          });
      }}
    >
      <input
        type="email"
        placeholder="Email"
        required
        value={formData.email}
        onChange={(event) => {
          setFormData((prev) => ({ ...prev, email: event.target.value }));
        }}
      />
      <input
        type="password"
        placeholder="Password"
        required
        value={formData.password}
        onChange={(event) => {
          setFormData((prev) => ({ ...prev, password: event.target.value }));
        }}
      />
      <input
        type="text"
        placeholder="Enter your name"
        required
        value={formData.name}
        onChange={(event) => {
          setFormData((prev) => ({ ...prev, name: event.target.value }));
        }}
      />
      <input
        type="number"
        placeholder="Enter your age"
        required
        value={formData.age}
        onChange={(event) => {
          setFormData((prev) => ({ ...prev, age: event.target.value }));
        }}
      />
      <div className="radio">

      <label htmlFor="Male">Male</label>
      <input
        id="Male"
        type="radio"
        name="gender"
        value={"Male"}
        required
        checked={formData.gender == "Male" ? true : false}
        onChange={(event) => {
          setFormData((prev) => ({ ...prev, gender: event.target.value }));
        }}
      />
      <label htmlFor="Female">Female</label>
      <input
        id="Female"
        type="radio"
        name="gender"
        value={"Female"}
        required
        checked={formData.gender == "Female" ? true : false}
        onChange={(event) => {
          setFormData((prev) => ({ ...prev, gender: event.target.value }));
        }}
      />
      </div>

      <button type="submit">{loading ? "loading..." : "create account"}</button>
      <ToastContainer />
    </form>
    <p>Already have an account<button onClick={() => signIn()}>Login</button></p>
    </>
  );
};

export default Form;
