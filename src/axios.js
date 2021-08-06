const axios = require("axios").default;

const instance = axios.create({
  baseURL: "https://gorest.co.in/public/v1/users",
});

export default instance;
