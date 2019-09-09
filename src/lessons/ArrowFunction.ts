export default () => {
  class MyClass {
    myMethod() {
      console.log("1", this);
      setTimeout(() => {
        console.log("2", this);
      }, 0);
    }
  }

  const myInstance = new MyClass();
  myInstance.myMethod();
};
