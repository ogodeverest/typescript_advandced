export default function() {
  //objects

  const myObj = {
    myMethod() {
      console.log(`Object :::: `, this);
    }
  };

  //   myObj.myMethod();

  //classes

  class MyClass {
    public myMethod() {
      console.log(`Class `, this);
    }
  }

  const instance = new MyClass();

  //functions
  function myFunction(...text: string[]) {
    console.log(`Function::::::`, this, text);
  }

  const bindFunction = myFunction.bind(myObj, "Sdadas", "dsadsadas");
  bindFunction();
  //   myFunction.call(myObj, "sadas", "asdasdas");
  //   myFunction.apply(myObj, ["dsadsad"]);
}
