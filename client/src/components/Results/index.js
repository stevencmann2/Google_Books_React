import React from "react";

const Results= ({searchResults})=> 
    (
    <div className="card p-3">
    <h5 class="card-title">Search Results</h5>
    <ul className="list-group">
        {searchResults.map(result => (
        <li className="list-group-item mb-2" key={result.id}>
            <img alt={result.title} className="img-fluid" src={result.images.original.url} />
        </li>
        ))}
    </ul>
    </div>


    );
      



export default Results;