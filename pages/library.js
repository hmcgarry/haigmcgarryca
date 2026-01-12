import books from "@/models/books"
import currentBooks from "@/models/currentBook"
import WebNavbar from "../components/Navbar"
import { Container, Row, Button, Col } from "react-bootstrap"
import Head from 'next/head'
import BookGrid from "@/components/BookGrid"
import {useState, useEffect, use, useEffectEvent} from 'react'
import styles from '@/styles/hmcard.module.css';

const btns = ["Finished Reading", "Currently Reading"];

export default function BookCorner(){
    const [page, setPage] = useState(0);
    const [component, setComponent] = useState(null);
    const [btnJsx, setBtnJsx] = useState([]);
   // const [displayBooks, setDisplayBooks] = useState([]);

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
                break;
        }
    }

    const updateBtns = useEffectEvent((arr)=>{
        setBtnJsx(arr);
    })

    useEffect(()=>{
                let tempArr = btnJsx.map((btn, idx)=>{
                    return <Col key={idx} 
                    className={`${styles.HMBtnCol}`}> <Button size="sm" onClick={(e)=>{
                        handleBtnClick(idx);
                    }} id="finished-btn" variant="outline-main" active={idx===page}>
                        {btns[idx]}
                    </Button> </Col>
        })
        updateBtns(tempArr);
    }, [page])

   const handlePageUpdate = useEffectEvent((jsx)=>{
        setComponent(jsx);
        let tempArr = [];
         btns.forEach((btn, idx)=>{
            tempArr.push(<Col className={`${styles.HMBtnCol}`}>
                    <Button size="sm" onClick={(e)=>{
                        handleBtnClick(idx);
                    }} id="finished-btn" variant="outline-main" active={idx===page}>
                        {btn}
                    </Button></Col>)
        })
        setBtnJsx(tempArr);
       
   })
   useEffect(()=>{
    handlePageUpdate((<BookGrid displayBooks={books} />)); //default to finished reading

   },[])

   
    return (
    <>
        <WebNavbar />
        <Head>
            <title>Haig &quot;Library&quot; McGarry</title>
            <meta name="Library"></meta>
        </Head>
        <body>
            <Container  className={`justify-content-md-center align-items-center mt-2 ${styles.HMCardBtnContainer}`} >
                <Row>
                    {btnJsx}
                </Row>
            </Container>
            {component}
        </body>
    </>
    )
}
