import axios from "axios";

// key CIA3Z34691M3TM2I

export const stockApi = axios.create({
  baseURL: "https://www.alphavantage.co/query",
  params: {
    apikey: "CIA3Z34691M3TM2I",
  },
});
