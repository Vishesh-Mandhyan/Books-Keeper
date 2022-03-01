import { useQuery } from "@apollo/client";
import React from "react";
import { getbookdetails } from "../Queries/queries";

function Bookdetails (props) {
  const { loading, error, data } = useQuery(getbookdetails, {
    variables: { id: props.bookID },
  });

  if (loading) return <p> Loading... </p>;
  if (error) return <p>{error}</p>;
  // console.log(props.bookID);
  console.log(data.kitab);
  if (data.kitab === null) return <p> null </p>;
   else{
    return (
      <div id="book-details">
        <p>Output data details here</p>

        <div>
          <h2>{ data.kitab.name }</h2> 
          <p>{ data.kitab.genre }</p>
          <p>{ data.kitab.author.name }</p>
          <p>All books by this author:</p> 
          <ul className="other-datas">
                        { data.kitab.author.kitab.map(item => {
                            return <li key={item.id}>{ item.name }</li>
                        })}
                    </ul>
        </div>
      </div>
    );
  }
}

export default Bookdetails;
