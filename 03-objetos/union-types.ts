type Hero = {
  name: string;
  age?: number;
  powers: string[];
  getName?: () => string;
};

let myCustomVariable: string | number | Hero = "Mauricio";
console.log(typeof myCustomVariable);

myCustomVariable = 20;
console.log(typeof myCustomVariable);

myCustomVariable = {
  name: "Mauricio",
  age: 19,
  powers: ["Sleep", "Eat"],
  getName() {
    return this.name;
  },
};

