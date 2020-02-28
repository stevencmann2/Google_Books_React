import React from "react";


 const Results= ({
     searchResults, 
     viewHandler, 
     saveHandler
    })=>  {
      
return (
   
    <div className="card p-3">
    <h5 className="card-title">Search Results</h5>

    <ul className="list-group">
        {searchResults.map(result => (
        <li className="list-group-item mb-2" key={result.id}>
            <span className="btn btn-success m-2 float-right" data-id={result.id} onClick={saveHandler}>
                Save
            </span>
            <span className="btn btn-primary m-2 float-right" onClick={viewHandler}>
                View
            </span>
            <h2>{result.volumeInfo.title}</h2>
            <h5>{result.volumeInfo.authors}</h5>
            <h6>{result.volumeInfo.categories}</h6>
            <div className="mt-2">
            <p className="img-fluid float-right">{result.volumeInfo.description}</p>
            {result.volumeInfo.imageLinks &&  
            (<img alt={result.volumeInfo.title} className="img-fluid float-left" src={result.volumeInfo.imageLinks.thumbnail} />)
        }
            </div>
        </li>
        ))}
    </ul>
    </div>


        )
    };

     

export default Results;