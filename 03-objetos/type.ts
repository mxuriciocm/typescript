() => {
  type Hero = { // type keyword creates custom strict typing for multiple objects 
    name: string;
    age?: number;
    powers: string[];
    getName?: () => string;
  };

  let flash1: Hero = {
    name: "Barry Allen",
    age: 24,
    powers: ["Super velocidad", "Viajar en el tiempo"],
  };

  let flash2: Hero = {
    name: "Barry Allen",
    age: 24,
    powers: ["Super velocidad", "Viajar en el tiempo"],
  };
};
