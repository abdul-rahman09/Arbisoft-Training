export enum TODO_STATUS {
  PENDING,
  DONE,
}

export interface TodoItem {
  id: number;
  text: string;
  showEdit: boolean;
  state: TODO_STATUS;
}
