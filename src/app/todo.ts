export class Todo {
    id: number;
    title: String = '';
    complete: Boolean = false;

//In this Todo class definition, we specify that each Todo instance will have three properties:
constructor(values: Object = {}) {
    Object.assign(this, values); 
  }
}
