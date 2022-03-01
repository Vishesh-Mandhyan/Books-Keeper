import React,{useState} from "react";
import {getBooksQuery} from '../Queries/queries';
import { useQuery } from "@apollo/client";
import Bookdetails from "./Bookdetails";

function BookList(props) {
  const [State, setState] = useState({selected:null})
  function BookItems(props) {
    return props.data.allbooks.map((book) => {
     return <li key={book.id} onClick={(e)=>{setState({selected:book.id})}}>
        {book.name} genre {book.genre}
      </li>;
    });
  }
  const { loading, error, data } = useQuery(getBooksQuery);

  if (loading) return <p> Loading... </p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <ul id="book-list">
        <BookItems data={data} />
        <Bookdetails bookID={State.selected}/>
      </ul>
    </div>
  );
}
export default BookList;
