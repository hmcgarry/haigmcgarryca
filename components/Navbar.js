'use client'
import { Container, Nav, Navbar, NavDropdown, Button, Row,Col } from "react-bootstrap";
import {BookHalf, HouseDoorFill, PersonLinesFill} from "react-bootstrap-icons";
import Link from 'next/link';
import {useRouter} from 'next/router';
import useState from 'react';
import styles from "../styles/hmnavbar.module.css"




    //Event Handler for mousing over a navlink
function hoverOn(srcTag){
    srcTag.target.style.fontSize = '1.5rem';
}

function hoverOff(srcTag){
    srcTag.target.style.fontSize = (srcTag.target.className === "HMSelectedLink" ? "1rem" : "0.8rem");
}

export default function WebNavbar(){
    const router = useRouter();

    console.log(router.pathname)

    return(
        <>
        <Navbar
        expand="lg"
        bg="main"
        className={`${styles.HMNavBar}`}>
            <Container>
                <Link href="/" className={styles.HMTitleLink} passHref>
                <Navbar.Brand className="d-flex align-items-center">
                    <div className={`fw-bold ${styles.HMTitleLink}`} >
                        <h1 className={`text-white ${styles.HMTitleText}`} >Haig McGarry</h1>
                        <h6 className={`text-aux ${styles.HMTitleText}`}>dot</h6>
                        <h1 className={`text-white ${styles.HMTitleText}`}>ca</h1>
                    </div>
                </Navbar.Brand>
                </Link>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-2">
                        <Link href="/" className={`${styles.HMTabLink} mx-3`}  passHref >
                            <span className={`
                                ${router.pathname === "/" ? styles.HMSelectedLink : styles.HMUnselectedLink}
                            `}>Home</span>
                        </Link>
                        <Link href="/library" className={`${styles.HMTabLink} mx-3`}  passHref>
                            <span className={`mx-2
                                ${router.pathname === "/library" ? styles.HMSelectedLink : styles.HMUnselectedLink}
                            `}>Library</span>
                        </Link>
                        <Link href="/contactme" className={`${styles.HMTabLink} mx-3`} passHref>
                           <span className={`
                                ${router.pathname === "/contactme" ? styles.HMSelectedLink : styles.HMUnselectedLink}
                            `}>Contact Me</span>
                        </Link>
                    </Nav>
                </Navbar.Collapse>

                
            </Container>
        </Navbar>
    </>
    )
}