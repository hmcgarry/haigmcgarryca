import Card from "react-bootstrap/Card";
import { Placeholder } from "react-bootstrap";
import styles from "../styles/hmcard.module.css"
import BookModal from "./BookModal";
import {useState} from 'react'

//BookCard is the Bootstrap Card component. It will take props/children
/* The props will be a book object, of structure:
{
    id: number
    title: string
    author: string
    cover image: string-url
    release year: string
    genre: array of strings
    comments: optional string
}*/

const sample_book = {
    "id": 0,
    "Title": "Anna Karenina",
    "Author": "Leo Tolstoy",
    "Cover Image": "/images/annakareninacover.jpg",
    "Release Year": "1878",
    "Genre": ["Fiction", "Character Study", "Romance"],
};





export default function BookCard(prop){
    const [show, setShow] = useState(false);

    const displayModal = () =>{
        show ? setShow(false) : setShow(true);
    }

    if (prop.book){
        return(
        <>
        <div>
        <Card className={`bg-main text-aux ${styles.HMCard}`} id={`card-${prop.book.id}`} onClick={displayModal}>
            <Card.Img src={prop.book["Cover Image"]} alt={`Cover of ${prop.book.Title} by ${prop.book.Author}`} className={styles.HMCardImg} id={`card-img-${prop.book.id}`}/>
            <Card.Body className={`${styles.HMCardBody}`}>
                <Card.Title className={`text-white ${styles.HMCardText}`}>{prop.book.Title}</Card.Title>
                <Card.Subtitle className="text-white">{typeof prop.book.Author === 'string' ? prop.book.Author : prop.book.Author.join(", ")} | {prop.book["Release Year"]}</Card.Subtitle>
            </Card.Body>
            <Card.Footer className={`${styles.HMCardFooter}`}>
                {prop.book.Genre.join(", ")}
            </Card.Footer>
        </Card>
        </div>
        </>
    )
    }

    else {
        return(
            <>
                <Card className={`bg-main text-aux ${styles.HMCard}`}>
                    <Card.Body className={`${styles.HMCardBody}`}>
                        <Placeholder as={Card.Title} className={`text-white ${styles.HMCardText}`} animation="glow"><Placeholder xs={6}/></Placeholder>
                        <Placeholder as={Card.Subtitle} className="text-white" animation="glow"><Placeholder xs={7} /> | <Placeholder xs={4} /></Placeholder>
                    </Card.Body>
                    <Card.Footer className={`${styles.HMCardFooter}`}>
                        <Placeholder xs={7} animation="glow"/>
                    </Card.Footer>
                </Card>
            </>
        )
    }

    
}