import axios from "axios";

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = "AIzaSyAMDc3YZ_37GQTepr8yWe-rYP3UmnV14vY";

export default {
  search: function(query) {
    return axios.get(BASEURL + query + "&key=" + APIKEY);
  }
};
