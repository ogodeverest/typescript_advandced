export default () => {
  interface Person {
    name: string;
    age: number;
  }

  interface ReadonlyPerson {
    readonly name: string;
    readonly age: number;
  }

  const person: Person = {
    name: "??",
    age: 27
  };

  type MyReadonly<T> = {
    readonly [P in keyof T]: T[P];
  };

  const freeze = <T>(obj: T): MyReadonly<T> => {
    return Object.freeze(obj);
  };

  const newPerson = freeze(person);
};
