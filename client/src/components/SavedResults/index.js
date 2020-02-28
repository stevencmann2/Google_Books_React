import React from "react";
// import API from "../../utils/API";


const SavedResults = ({

  deleteHandler,
  viewHandler,
  savedBooks
}) => {


    return(
        <div className="card p-3" style={styles.deep}>
        <h5 className="card-title">Saved Books</h5>

        <ul className="list-group">

        {savedBooks.length > 0 && (savedBooks.map(result => (
        <li className="list-group-item mb-4" key={result._id} style={styles.deep}>
        <span className="btn btn-danger m-2 float-right" data-id={result._id} onClick={deleteHandler}>
                Delete
            </span>
            <span className="btn btn-primary m-2 float-right" data-id={result.link} onClick={viewHandler}>
                View
            </span>
            <div className="mb-4">
            <h4>{result.title}</h4>
            <h5>{result.author}</h5>
            <h5>{result.category}</h5>
            </div>
            <div className="row mt-2 mb-3">
            <div className="col-2">
            <img alt={result.title} className="img-fluid" src={result.image} />
            </div>
            <div className="col-10">
            <p className="img-fluid">{result.description}</p>
            </div>
            </div>
        </li>
        )))}
    </ul>
    
        </div>
    )
}


const styles = {

    deep: {
         boxShadow: '0 8px 6px -6px black' 
    }
}

export default SavedResults; 