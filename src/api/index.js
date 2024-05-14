import axios from "axios";
import { memo } from "react";

const mainUrl = axios.create({
  baseURL: "https://fakestoreapi.com",
});

export default mainUrl;
