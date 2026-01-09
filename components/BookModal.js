import Modal from 'react-bootstrap/Modal'
import styles from '@/styles/hmmodal.module.css'

const sample_book = {
    "id": 0,
    "Title": "Anna Karenina",
    "Author": "Leo Tolstoy",
    "Cover Image": "/images/annakareninacover.jpg",
    "Release Year": "1878",
    "Genre": ["Fiction", "Character Study", "Romance"],
};  

const default_comment ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue sed risus et posuere. Cras rutrum justo tellus, vel dictum diam porta nec. Vestibulum ullamcorper elit eget egestas euismod. Integer vitae fermentum libero. Cras aliquet consectetur vulputate. Quisque venenatis nec felis sed volutpat. Nam efficitur mi nibh, ut fermentum arcu gravida eu. Nam ornare neque id metus ultrices, ut finibus turpis hendrerit. Vestibulum blandit dapibus sem. Nam quis vestibulum felis, ac pulvinar ligula. Aliquam erat volutpat. "

export default function BookModal(props){

    function handleClose(){
        props.closeModal(true);
    }

    return(
        <Modal className={`${styles.HMModal}`} show={props.showModal} onHide={handleClose}>
            <Modal.Body>
                <Modal.Title>{sample_book.Title}</Modal.Title>
                <h2>{sample_book.Author} | {sample_book['Release Year']}</h2>
                <h4>{sample_book.comment ? sample_book.comment : default_comment}</h4>
            </Modal.Body>
            <Modal.Footer>{sample_book.Genre.join(", ")}</Modal.Footer>
        </Modal>
    )
}