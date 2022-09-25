import s from './Book.module.css';

const Book = () =>{
    return(
    <>
    <li>
        <p className={s.item}>Author: <span className={s.desc}>...</span></p>
        <p className={s.item}>Year: <span className={s.desc}>...</span></p>
        <p className={s.item}>Pages: <span className={s.desc}>...</span></p>
    </li>
    </>)
}

export default Book;