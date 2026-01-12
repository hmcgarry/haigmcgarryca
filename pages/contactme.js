import styles from "../styles/hmcard.module.css"
import WebNavbar from "../components/Navbar"
import ContactForm from "@/components/ContactForm"
import Head from "next/head"
export default function ContactMe(){
        return (
        <>
        <Head>
                <title>Haig &quot;Contact Me&quot; McGarry</title>
                <meta name="contactpage"></meta>    
        </Head>
            <WebNavbar />
                 <article className="HMBody">
                   <ContactForm />
                </article>
        </>
        )
}