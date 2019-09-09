export default () => {
  interface Person {
    name: string;
    age?: number;
  }

  type MyRequired<T> = {
    [P in keyof T]-?: T[P];
  };

  const person: MyRequired<Person> = {
    name: "asdsa",
    age: 27
  };

  const printAge = (person: MyRequired<Person>) => {
    return `Age : ${person.age}`;
  };

  const age = printAge(person);
};
