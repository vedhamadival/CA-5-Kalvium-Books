import { useState , useEffect} from 'react'
import axios from 'axios'
import Header from './Header'

function Books() {

    const [bookData , setBookData] =  useState([])
    const [searchedData , setSearchedData] = useState('')

    //fetching data
    const getData = () =>{
        axios.get("https://reactnd-books-api.udacity.com/books" , {headers: {'Authorization': 'Books'} })
        .then(res=> {
            setBookData(res.data.books)
            console.log(res)})
        .catch(err => console.log(err))
        }

    //displaying data in default
    useEffect(() => {
        getData();
    }, []);

    //to filter books
    const filterBooks = bookData.filter(book => book.title.toLowerCase().includes(searchedData.toLowerCase()))

    
    //Header component
    //filters data only if searchedData is filled with something
      return (
        <>
        <Header setSearchedData={setSearchedData}/>
        <div id="book-Container">
        {filterBooks.map(book=>(
            <div key={book.id} id="book-items">
                <img src={book.imageLinks.thumbnail} style={{height:'250px', width:'150px' , borderRadius:'5px'}}/>
                <h4>{book.title}</h4>

                {/* <div id="subtitle">
                <p>{book.subtitle}</p>
                </div> */}

                <div id="rating">
                <p id="star">{(book.averageRating? book.averageRating : '4.5')}&#9733;</p> 
                <p id="Price">Free</p>
                </div>
            </div>
        ))}
        </div>
        </>
      )
}

export default Books
