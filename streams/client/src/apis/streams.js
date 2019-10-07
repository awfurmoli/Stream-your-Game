import axios from "axios";

export default axios.create({
  baseURL: "https://streams-api-wali.herokuapp.com"
});
