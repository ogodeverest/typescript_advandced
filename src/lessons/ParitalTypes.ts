export default () => {
  interface Person {
    name: string;
    age: number;
  }

  type MyPartial<T> = {
    [P in keyof T]?: T[P];
  };

  const updatePerson = (person: Person, prop: MyPartial<Person>) => {
    return { ...person, ...prop };
  };

  const person: Person = {
    name: "asdsa",
    age: 27
  };

  updatePerson(person, {
    name: "abc"
  });
};
