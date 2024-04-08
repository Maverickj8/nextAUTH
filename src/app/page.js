import Image from "next/image";
import '@/app/globals.css'
import styles from '@/app/home.module.css'
import Form from "./register/page";
import Contacts from "./contacts/contact-form";



export default function Home() {
  return (
    <>
    <h1 className="text-blue-500">welcome to Next</h1>
    <p className={styles.shape}></p>
    <Form />
    </>
  );
}
