import React from "react";


 const Results= ({
     searchResults, 
     viewHandler, 
     saveHandler
    })=>  {
      
return (
   
    
    <div className="card p-3 mb-5" style={styles.depth}>
    
    <h5 className="card-title">Search Results</h5>

    <ul className="list-group">
        {searchResults.map(result => (
        <li className="list-group-item mb-4" key={result.id} style={styles.depth}>
            <span className="btn btn-success m-2 float-right" data-id={result.id} onClick={saveHandler}>
                Save
            </span>
            <span className="btn btn-primary m-2 float-right" data-id={result.id} onClick={viewHandler}>
                View
            </span>
            <div className="mb-4">
            <h4>{result.volumeInfo.title}</h4>
            <h5>{result.volumeInfo.authors}</h5>
            <h6>{result.volumeInfo.categories}</h6>
            </div>
            <div className="row mt-2">
            
            {result.volumeInfo.imageLinks &&  
            (
                <div className="col-2">
                <img alt={result.volumeInfo.title} className="img-fluid" src={result.volumeInfo.imageLinks.thumbnail} />
                </div>
            )
        }
        <div className= "col-10">
            <p className="img-fluid">{result.volumeInfo.description}</p>
            </div>
            </div>
        </li>
        ))}
    </ul>
        
    </div>


) 
    };


const styles = {

    depth : {
        boxShadow: '0 8px 6px -6px black' 
    }
}
     

export default Results;