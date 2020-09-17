import axios, { AxiosInstance } from "axios";

abstract class ApiService {
  private static readonly api: AxiosInstance = axios.create({
    baseURL: "https://swapi.dev/api/",
  });
}

export default ApiService;
