import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://code-spark-backend.onrender.com",
  // baseURL: "http://localhost:5000", for checking on localhost

  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;
