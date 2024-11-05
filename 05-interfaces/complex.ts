interface Client {
  name: string;
  age?: number;
  adress?: {
    id: number;
    city: string;
    zipCode: string;
  };
}

const client: Client = {
  name: "Fernando",
  age: 25,
};

// another way more clean using more interfaces

interface Client1 {
  name: string;
  age?: number;
  adress?: Adress;
}

interface Adress {
  id: number;
  city: string;
  zipCode: string;
}

// methods in interfaces,but its not recommend if you need to defined a method you should use classes
interface Client2 {
  name: string;
  age?: number;
  adress?: Adress;
  getFullAdress(id: string): string; // method
}
