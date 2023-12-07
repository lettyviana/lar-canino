import axios, { type AxiosInstance } from "axios";

export class ApiServices {
  axios: AxiosInstance;

  constructor() {
    this.axios = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_URL + "/api",
    });
  }

  get(url: string) {
    return this.axios.get(url);
  }
}
