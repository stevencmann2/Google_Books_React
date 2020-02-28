import React, { useState, useEffect } from "react";
import Form from "../components/Form"
import Results from "../components/Results"
import API from "../utils/API";
import EmptySearchCard from "../components/EmptySearchCard";



function Search() {
    // FOR THE FORM 
    const [inputField, setInputField] = useState("");
    const [searchResults, setSearchResults] = useState([]);


    const handleInputChange = event => {
      const value = event.target.value;
      setInputField(value);
    };
    const handleFormSubmit = event => {
      event.preventDefault();
      setInputField("");
      /////// SEARCH FOR BOOK USING STATE
      searchGoogle(inputField)
    };

// FOR RESULTS
  useEffect(() => {
    /* This runs when the component mounts */
    searchGoogle("");
  }, []);

  const searchGoogle = query => {
    API.search(query)
      .then(res => setSearchResults(res.data.items))
      .catch(err => console.log(err));
  };
/////// BUTTON FUNCTION 
const viewHandler = event => {
  event.preventDefault();
  const id = event.target.getAttribute("data-id");
  const viewBook = searchResults.filter(result => result.id === id);
  console.log(viewBook[0])
  window.open(viewBook[0].volumeInfo.previewLink)
  
}

const addBooktoDb = async (event) => {
  const id = event.target.getAttribute("data-id");
  const book = searchResults.filter(result => result.id === id);
  const bookToBeSaved = {
    "id": book[0].id,
    "title":book[0].volumeInfo.title,
    "author": book[0].volumeInfo.authors[0],
    "description": book[0].volumeInfo.description,
    "image": book[0].volumeInfo.imageLinks.thumbnail,
    "category":book[0].volumeInfo.categories[0],
    "link": book[0].volumeInfo.previewLink
  }
  try {
    await API.saveBook(bookToBeSaved);
  } catch(error) {
    console.group("Save BOOK");
    console.log(error);
    console.groupEnd();
  }
};

 return(
    <div style={{marginBottom: '7em'}}>
        <Form 
        inputField={inputField}
        handleFormSubmit={handleFormSubmit}
        handleInputChange={handleInputChange}
        />

        {searchResults.length ? (  
        <Results 
        searchResults={searchResults} 
        saveHandler={addBooktoDb}
        viewHandler={viewHandler}
        />
        ) : 
        (<EmptySearchCard/>)}
       
       
    </div>
    
)


 
};



export default Search;