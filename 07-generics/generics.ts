export const printObject = (argument: any) => {
  // A generic function is one that accepts any type as a argument
  console.log(argument);
};

export function genericFunction<T>(argument: T) {
  return argument;
}

export const genericFunctionArrow = <T>(argument: T) => {
  return argument;
}