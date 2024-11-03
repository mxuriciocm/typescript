(() => {
  const addNumber = (a: number, b: number) => a + b;
  const greet = (name: string) => `Hola ${name}`;
  const saveTheWorld = () => `The world is safe`;

  let myFunction: Function;

  myFunction = addNumber;
  console.log(myFunction(1, 2));
  myFunction = greet;
  console.log(myFunction("mauricio"));
  myFunction = saveTheWorld;
  console.log(myFunction());
})();
