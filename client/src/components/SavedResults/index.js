import React, { useState, useEffect } from "react";
import API from "../../utils/API";


const SavedResults = ({

  deleteHandler,
  viewHandler
}) => {

    const [savedBooks, setSavedBooks] = useState([]);


    useEffect(() => {
        loadSavedBooks();
      }, []);

      const loadSavedBooks = async () => {
        try {
          const response = await API.getBooks();
          setSavedBooks(response.data);
        } catch (error) {
          console.group("LOAD BOOKS");
          console.log(error);
          console.groupEnd();
        }
      };


    return(
        <div className="card p-3">
        <h5 className="card-title">Saved Books</h5>

        <ul className="list-group">
        {savedBooks.map(result => (
        <li className="list-group-item mb-2" key={result.id}>
        <span className="btn btn-danger m-2 float-right" data-id={result.id} onClick={deleteHandler}>
                Delete
            </span>
            <span className="btn btn-primary m-2 float-right" onClick={viewHandler}>
                View
            </span>
            <h2>{result.title}</h2>
            <h5>{result.author}</h5>
            <h5>{result.category}</h5>
            <div className="mt-2">
            <p className="img-fluid float-right">{result.description}</p>
            <img alt={result.title} className="img-fluid float-left" src={result.image} />
            </div>
        </li>
        ))}
    </ul>
    
        </div>
    )
}

export default SavedResults; 