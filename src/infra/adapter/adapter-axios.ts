import { URL_BASE } from "../../constants/URL";
import HttpAdapter from "./http-adapter";
import Axios from "axios";

export default class AdapterAxios implements HttpAdapter {

  constructor() {
  }

  async get(id: string) {
    const response = await Axios.get(`${URL_BASE}/${id}`);
    return response.data
  }
}