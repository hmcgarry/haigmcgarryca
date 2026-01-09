import "../styles/hmnavbar.module.css"
import WebNavbar from "../components/Navbar"
import ContactForm from "@/components/ContactForm"
export default function ContactMe(){
        return (
        <>
            <WebNavbar />
                 <article className="HMBody">
                   <ContactForm />
                </article>
        </>
        )
}