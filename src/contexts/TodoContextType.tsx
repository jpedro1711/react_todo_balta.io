import { Todo } from "../models/Todo";

export default interface TodoContextType {
  todos: Todo[]
  addTodo(title: string): void;
  removeTodo(todo: Todo): void;
  toggle(todo: Todo): void
} 