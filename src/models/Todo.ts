export interface Todo {
  id: number;
  title: string;
  completed: boolean
}

export class Todo {
  constructor(toto: any) {
    this.id = toto.id;
    this.title = toto.title;
    this.completed= toto.completed;
  }
}
