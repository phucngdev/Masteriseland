import axios from "axios";

const defaultURL = "https://masteriseland-24c21-default-rtdb.firebaseio.com/";
const baseUrl = axios.create({
  baseURL: defaultURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default baseUrl;
