import React, { useState, useEffect } from "react";
import Form from "../components/Form"
import Results from "../components/Results"
import API from "../utils/API";


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

 return(
    <div>
        <Form 
        inputField={inputField}
        handleFormSubmit={handleFormSubmit}
        handleInputChange={handleInputChange}
        />

        
        <Results searchResults={searchResults} />
       

    </div>
)


 
};

export default Search;