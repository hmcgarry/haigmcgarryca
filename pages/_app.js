import "@/styles/globals.css";
import "../styles/hmnavbar.module.css"
import 'bootstrap/dist/css/bootstrap.css';
import "../styles/custom_scss.css"
import WebNavbar from "@/components/Navbar";

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
}
