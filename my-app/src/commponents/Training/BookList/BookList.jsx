import Book from './Book/Book';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import s from './BookList.module.css';

const BookList = () =>{
    return(
    <>
    <div className={s.container}>
        <MenuBookIcon/>
        <div className={s.content}>
        <h2>...</h2>
        <ul className={s.list}>
           <Book/>
        </ul>
        </div>
    </div>
    </>)
}

export default BookList;