let flash = {
  name: "Barry Allen",
  age: 24,
  powers: ["Super velocidad", "Viajar en el tiempo"],
};

flash = {
  name: "Mauricio",
  age: 19,
  powers: ["Sleep"],
};

// object literal with type

let flash1: { name: string; age: number; powers: string[], getName?: () => string } = { //  getName?: () => string its a typed method that returns a string
  name: "Barry Allen",
  age: 24,
  powers: ["Super velocidad", "Viajar en el tiempo"],
};

// re-asigned object literal

flash1 = {
    name: 'Mauricio',
    age: 19,
    powers: ['Sleep']
}

// re-asigned object literal and add new argument
flash1 = {
    name: 'Mauricio',
    age: 19,
    powers: ['Sleep'],
    getName(){
        return this.name
    }
}