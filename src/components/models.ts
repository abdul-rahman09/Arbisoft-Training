export enum TODO_STATUS {
  PENDING,
  DONE,
}
export enum EDIT_STATUS {
  No = 0,
  Yes = 1,
}

export interface TodoItem {
  id: number;
  text: string;
  showEdit: EDIT_STATUS;
  state: TODO_STATUS;
}
