import HttpAdapter from "../adapter/http-adapter";

export default class HttpClient {
  constructor(readonly adapter:  HttpAdapter) {
    this.adapter = adapter;
  }

  async get(id: string) {
    return this.adapter.get(id);
  }
}