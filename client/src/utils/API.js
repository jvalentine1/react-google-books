import axios from "axios";

export default {
  getBooks: function(query) {
    return axios.get("/api/recipes", { params: { q: query } });
  }
};