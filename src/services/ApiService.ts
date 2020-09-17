import axios from "axios";

abstract class ApiService {
  private static api = axios.create({
    baseURL: "https://swapi.dev/api/",
  });

  get api() {
    return ApiService.api;
  }
}

export default ApiService;
