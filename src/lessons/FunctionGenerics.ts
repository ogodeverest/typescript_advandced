class Pizza {
  constructor(private name: string, private price: number) {}
}

class List<T> {
  private list: T[];
  addItem(item: T): void {
    this.list.push(item);
  }

  get lists(): T[] {
    return this.list;
  }
}

export default () => {
  const list = new List<Pizza>();
  list.addItem(new Pizza("Peperoni", 15));
  const pizzas: Pizza[] = list.lists;
};
