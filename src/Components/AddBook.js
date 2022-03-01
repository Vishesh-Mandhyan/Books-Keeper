import React, { useState } from "react";
import { addBookQuery, getAuthorsQuery, getBooksQuery } from "../Queries/queries";
import { useMutation, useQuery } from "@apollo/client";

function Authors(props) {
  return props.data.allauthors.map((author) => {
    return (
      <option key={author.id} value={author.id}>
        {author.name}
      </option>
    );
  });
}
function AddBook() {
  const [state, setState] = useState({ name: "", genre: "", authorId: "" });
  const [addbooks, { data1, loading1, error1 }] = useMutation(addBookQuery);
  function submitForm(e) {
    e.preventDefault();
    console.log(state);
    addbooks({
      variables: {
        name: state.name,
        genre: state.genre,
        authorId: state.authorId,
      },
      refetchQueries:[{query:getBooksQuery}]
    });
    console.log(data1);
  }
  const { loading, error, data } = useQuery(getAuthorsQuery);
  if (loading) return <p> Loading... </p>;
  if (error) return <p>{error}</p>;

  if (loading1) return <p> Loading... </p>;
  if (error1) return <p>{error}</p>;

  return (
    <form id="add-book" onSubmit={submitForm}>
      <div className="field">
        <label>Book name:</label>
        <input
          type="text"
          onChange={(e) => setState({ name: e.target.value })}
        />
      </div>
      <div className="field">
        <label>Genre:</label>
        <input
          type="text"
          onChange={(e) => {
            setState((prevState) => {
              return { ...prevState, genre: e.target.value };
            });
          }}
        />
      </div>
      <div className="field">
        <label>Author:</label>
        <select
          onChange={(e) => {
            setState((prevState) => {
              return { ...prevState, authorId: e.target.value };
            });
          }}
          >
         
          <option>Select author</option>
          <Authors data={data} />
        </select>
      </div>
      <button type="submit">+</button>
    </form>
  );
}
export default AddBook;
