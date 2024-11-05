interface Hero { // its the same that type but with the difference that the interfaces can be extended with other interfaces
  name: string;
  age?: number;
  powers: number[];
  getName?: () => string;
}

