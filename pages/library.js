import books from "@/models/books"
import currentBooks from "@/models/currentBook"
import WebNavbar from "../components/Navbar"
import { Container, Row, Button, Col } from "react-bootstrap"
import Head from 'next/head'
import BookGrid from "@/components/BookGrid"
import {useState, useEffect, use, useEffectEvent} from 'react'
import styles from '@/styles/hmcard.module.css';
export default function BookCorner(){
    const [page, setPage] = useState(0);
    const [component, setComponent] = useState(null);
   // const [displayBooks, setDisplayBooks] = useState([]);
   const handlePageUpdate = useEffectEvent((jsx)=>{
        setComponent(jsx);
   })
   useEffect(()=>{
    handlePageUpdate((<BookGrid displayBooks={books} />)); //default to finished reading
   },[])

    const handleBtnClick = (btnVal) => {
        switch(btnVal){
            case 0:
                if (page){
                    setPage(btnVal);
                    setComponent((<BookGrid displayBooks={books} />));
                }
                break;
            case 1:
                if (!page){
                    setPage(btnVal);
                    setComponent((<BookGrid displayBooks={currentBooks} />))
                }
                
        }
    }
    return (
    <>
        <WebNavbar />
        <Head>
            <title>Haig &quot;Library&quot; McGarry</title>
            <meta name="Library"></meta>
        </Head>
        <body>
            <Container  className={`justify-content-md-center align-items-center ${styles.HMCardBtnContainer}`} >
                <Row>
                    <Col className={`${styles.HMBtnCol}`}>
                    <Button size="sm" onClick={(e)=>{
                        handleBtnClick(0);
                    }} id="finished-btn">
                        Finished Reading
                    </Button>
                    </Col>
                    <Col className={`${styles.HMBtnCol}`}>
                    <Button size="sm"onClick={(e)=>{
                        handleBtnClick(1);
                    }} id="current-btn">
                        Currently Reading
                    </Button>
                    </Col>
                </Row>
            </Container>
            {component}
        </body>
    </>
    )
}
