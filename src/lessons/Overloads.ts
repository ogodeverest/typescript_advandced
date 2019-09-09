export default () => {
  function reverse(str: string): string;
  function reverse<T>(arr: T[]): T[];
  function reverse<T>(something: string | T[]): string | T[] {
    if (typeof something === "string") {
      return something
        .split("")
        .reverse()
        .join("");
    }

    return something.slice().reverse();
  }
  reverse("Peperoni");
  reverse(["bacon", "chilli"]);
};
