export default interface HttpAdapter {
  get(url: string): Promise<any>
}