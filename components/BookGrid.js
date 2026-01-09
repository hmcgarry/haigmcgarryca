//import books from "@/models/books"
//import currentBooks from "@/models/currentBook"
import BookCard from "./BookCard"
import {Container, Row, Col, Pagination} from 'react-bootstrap';
import styles from '@/styles/hmcard.module.css'
import { use, useEffect, useEffectEvent, useState } from "react";

const BOOKS_PER_ROW = 3;
const ROWS_PER_PAGE = 2;




export default function BookGrid(props){
const [bookNum, setBookNum] = useState(0);
const [books, setBooks] = useState([]);
const [currentPage, setCurrentPage] = useState(1);
const [pageBtns, setPageBtns] = useState([]);
const [gridJSX, setGridJSX] = useState([]);

function renderEmptyBooks(){
    let colJSX = [];
    let tempArr = [];
    for (let i = 0; i < ROWS_PER_PAGE; i++){
        for (let j = 0; j < BOOKS_PER_ROW; j++){
            colJSX.push(<Col key={j} className={`p-3 ${styles.HMCardCol} justify-content-center align-items-centers`}> <BookCard/> </Col>)
        }
        tempArr.push(<Row key={i} className={`p-3 ${styles.HMCardRow} justify-content-center align-items-centers`}>{colJSX.slice(i * BOOKS_PER_ROW, (i + 1) * BOOKS_PER_ROW)}</Row>)
    }
    return tempArr;
}


const handleBookChange = useEffectEvent((bookArr)=>{
    setBookNum(bookArr.length);
    setBooks(bookArr);
});

const handlePaginationClick = (page) =>{
    console.log(`inside handle cur page: ${currentPage}`)
   
    handleCurrentPageChange(page);
    
}
useEffect(()=>{
    
    const updatedPageBtns = pageBtns.map((btn, idx) =>{
        return <Pagination.Item key={idx + 1}
        onClick={()=>{handlePaginationClick(idx + 1)}}
        linkClassName={(idx + 1) === currentPage? styles.HMPageBtnActive :styles.HMPageBtn}
         linkStyle={(idx + 1) === currentPage? {backgroundColor: "#800850", color:"white", fontFamily: "Arial, Helvetica, sans-serif"}
                 : {backgroundColor: "white", color:"#800850", fontFamily: "Arial, Helvetica, sans-serif", boxShadow: "0px"}}>
        {idx + 1}</Pagination.Item>
    })

    console.log(`Updated Page Btns : ${updatedPageBtns.length}`)

    setPageBtns(updatedPageBtns);
}, [currentPage])


const handleCurrentPageChange = (page) =>{
    //deactivate current page btn
    console.log(`Changing cur page to: ${page}`)
    console.log(`Page buttons (handle function) ${pageBtns.length}`) //pageBtns is stale, it's still empty in this function call

    if (currentPage === page){
        console.log(`Current page and page are same value ${page}`);
        return
    }
   

    setBooks(props.displayBooks.slice((page - 1) * (BOOKS_PER_ROW * ROWS_PER_PAGE), (page) * BOOKS_PER_ROW * ROWS_PER_PAGE - props.displayBooks.length 
        < (BOOKS_PER_ROW * ROWS_PER_PAGE) ?
                props.displayBooks.length:
                (page) * BOOKS_PER_ROW * ROWS_PER_PAGE ));

    //change current page state
    setCurrentPage(page);
    window.scrollTo(0,0);
}



useEffect(()=>{
    let items = [];
    let page_number = Math.ceil(props.displayBooks.length / (BOOKS_PER_ROW * ROWS_PER_PAGE));
    console.log(`Page numbers: ${page_number}`)
    for (let i = 0; i < page_number; i++){
       // console.log(`Making page btn : ${i}`)
        items.push(<Pagination.Item key={i + 1}
            onClick={()=>{handlePaginationClick(i + 1)}} linkClassName={!i? styles.HMPageBtnActive :styles.HMPageBtn}
            linkStyle={!i? {backgroundColor: "#800850", color:"white", fontFamily: "Arial, Helvetica, sans-serif"}
                 : {backgroundColor: "white", color:"#800850", fontFamily: "Arial, Helvetica, sans-serif", boxShadow: "0px"}}>
                {i + 1}
            </Pagination.Item>)
    }

    console.log(`Items array length: ${items.length}`)


    props.displayBooks.length <= (BOOKS_PER_ROW * ROWS_PER_PAGE) ? handleBookChange(props.displayBooks) :
       handleBookChange(props.displayBooks.slice(0, BOOKS_PER_ROW * ROWS_PER_PAGE));

    setPageBtns(items);
    setCurrentPage(1);
}, [props.displayBooks])


useEffect(()=>{
    let colJSX = [];
    let tempArr = [];
    var rowSize;
    let subArr = books;
    let NUM_OF_ROWS = books.length >= (BOOKS_PER_ROW * ROWS_PER_PAGE) ? ROWS_PER_PAGE : 
        Math.ceil(books.length / (BOOKS_PER_ROW))
    

    if (bookNum % BOOKS_PER_ROW){
        NUM_OF_ROWS++;
    }
    console.log(`Current page: ${currentPage}`)
    for (let i = 0; i < NUM_OF_ROWS; i++){
        rowSize = subArr.length < BOOKS_PER_ROW ? subArr.length : BOOKS_PER_ROW;
        console.log('Row size: ' + rowSize)
        for (let j = 0; j < (rowSize); j++){
            //console.log(subArr[j]);
            colJSX.push(<Col key={j} className={`p-3 ${styles.HMCardCol} justify-content-center align-items-centers`}> <BookCard book={subArr[j]}/> </Col>)
        }

        let element = <Row key={i} className={`p-3 ${styles.HMCardRow} justify-content-center align-items-centers`}>{colJSX.slice(i * rowSize, (i + 1) * rowSize)}</Row>;
        
        tempArr.push(element);
       //console.log(element)
       subArr = books.slice((i + 1) * rowSize)

    }
    setGridJSX(tempArr);
    
}, [books]);
   
    if (gridJSX.length){
    return(
        <div className="d-flex">
        <Container className={`${styles.HMCardGrid} justify-content-center align-items-center `} fluid>  
            {gridJSX}
            <Pagination className="align-items-center justify-content-center">
                {pageBtns}
            </Pagination>
        </Container>


        </div>
    )
    }
    else {
        return (
            <Container className={`${styles.HMCardGrid} justify-content-center align-items-center `} fluid>  
                {renderEmptyBooks()}
            </Container>
        )
    }

}