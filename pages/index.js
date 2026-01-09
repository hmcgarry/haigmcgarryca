import WebNavbar from "../components/Navbar";
import Head from "next/head";

export default function Home(){
  return (
    <>
      <WebNavbar />
      <Head>
        <title>Haig &quot;HomePage&quot; McGarry</title>
        <meta name="homepage"></meta>
      </Head>
      {/**TODO: Add homepage body component*/}
      <article>
        Hello, my name is Haig McGarry and this is a website. My website. It&quot;s still a work in progress <br />
        Please check out the other tabs I have built. The contact me is still a wip so its a bit ugly but Functional <br />
        I plan to update this website with projects I work on, including other web apps and other stuff. It will be like a virtual resume but more fun
      </article>
    </>
  )
}