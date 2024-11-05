class Avenger {
  private name: string;
  private team: string;
  public realName?: string;
  static avgAge: number = 35;

  constructor(name: string, team: string, realName?: string) {
    this.name = name;
    this.team = team;
    this.realName = realName;
  }
}

// short way
class Avenger1 {
  static avgAge: number = 35;
  static getAvgAge() {  // The static method can be used only with the class name. example => Avenger.getAvgAge()
    return this.name;
  }

  constructor(
    private name: string,
    private team: string,
    private realName: string
  ) {}

  public bio() {
    return `${this.name} (${this.team})`;
  }
}

const antman: Avenger = new Avenger("Mauricio", "Avengers", "Antman");
const antman1: Avenger1 = new Avenger1("Mauricio", "Avengers", "Antman");
console.log(Avenger.avgAge)
console.log(Avenger1.getAvgAge())