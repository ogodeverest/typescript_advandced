export default () => {
  interface Person {
    name: string;
    age: number;
    address: {};
  }
  type MyPick<T, K extends keyof T> = {
    [P in K]: T[P];
  };
  const person: Pick<Person, "name" | "age"> = {
    name: "asdsa",
    age: 27
  };
};
