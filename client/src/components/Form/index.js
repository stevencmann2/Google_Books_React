import React, { useState } from "react";



const Form = ({
    handleInputChange,
    handleFormSubmit,
    inputField
}) =>
(
    <div className="card p-4 mb-3">
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
;


   export default Form;
