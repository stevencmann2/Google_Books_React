import React, { useState, useEffect} from "react";
import SavedResults from "../components/SavedResults"
import API from "../utils/API"
import EmptySavedCard from "../components/EmptySavedCard";


function Saved() {
    
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



const viewHandler = event => {
    event.preventDefault();
    const id = event.target.getAttribute("data-id");
    window.open(id)
}

const deleteHandler = event => {
    event.preventDefault();
    const savedId = event.target.getAttribute("data-id");
    deleteSavedBook(savedId)
}

const deleteSavedBook = async (savedId) => {
  try {
    await API.deleteBook(savedId);
    loadSavedBooks();
  } catch(error) {
    console.group("DELETE A BOOK");
    console.log(error);
    console.groupEnd();
  }
};
    
return(
  <div style={{marginBottom: '7em'}}>
        {savedBooks.length ?  
        (<SavedResults 
        deleteHandler ={deleteHandler}
        viewHandler = {viewHandler}
        savedBooks = {savedBooks}
        />
        ): 
        (<EmptySavedCard/>)
      }

      
      </div>
    )
}

export default Saved;