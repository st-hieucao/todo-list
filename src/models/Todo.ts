export interface Todo {
  id: number;
  title: string;
}

export class Todo {
  constructor(toto: any) {
    this.id = toto.id;
    this.title = toto.title;
  }
}
