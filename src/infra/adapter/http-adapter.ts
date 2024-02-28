import Todo from "../../entites/Todo";

export default interface HttpAdapter {
  get(id: string): Promise<Todo>
}