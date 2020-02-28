import React from "react";



const Form = ({
    handleInputChange,
    handleFormSubmit,
    inputField
}) =>
(
    <div className="card p-4 mb-3" style={styles.shadow}>
    <form>
        <h5 className="mb-3">Book Search</h5>
        <p className="mb-3">Book: </p>
        <input
            className="form-control mb-2"
            type="text"
            placeholder="Search for any Book"
            name="searchBook"
            value={inputField}
            onChange={handleInputChange}
        />
        <button className="btn btn-success float-right"
        onClick={handleFormSubmit}>Submit</button>
  </form>
  </div>
   
 )

 const styles = {

    shadow: {
         boxShadow: '0 8px 6px -6px black' 
    }
}


   export default Form;
