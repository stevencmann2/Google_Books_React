import axios from "axios";
// require('dotenv').config();

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
// APIKEY = process.env.API_KEY
const APIKEY = "AIzaSyAMDc3YZ_37GQTepr8yWe-rYP3UmnV14vY";

export default {
  search: function(query) {
    return axios.get(BASEURL + query + "&key=" + APIKEY);
  },
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};


