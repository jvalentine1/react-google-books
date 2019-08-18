import axios from "axios";

export default {
  getBooks: function(query) {
    return axios.get("/api/books", { params: { q: query } });
  },

  saveBook: function(book) {
    return axios.post("/api/save", book);
  },
  getSavedBooks: function() {
    return axios.get("/api/getsaved");
  },
  deleteBooks: function(id) {
    return axios.delete("/api/delete/" + id);
  }
};