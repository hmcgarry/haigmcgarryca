import WebNavbar from "../components/Navbar";
import {Row, Container, Col} from "react-bootstrap";
import Head from "next/head";
import BookCard from "@/components/BookCard";

export default function Home(){
  return (
    <>
      <WebNavbar />
      <Head>
        <title>Haig &quot;HomePage&quot; McGarry</title>
        <meta name="homepage"></meta>
      </Head>
      {/**TODO: Add homepage body component*/}
    </>
  )
}