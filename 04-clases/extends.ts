class Avenger2 {
  constructor(public name: string, public realName: string) {}
  protected getFullName() {
    // A method of type protected is used when you want to inherit said method
    return `${this.name} ${this.realName}`;
  }

  get fullName() {
    return `${this.name} ${this.realName}`;
  }

  set fullName(name: string) {

    if (name.length < 3){
        throw new Error('The name must be greater than 3 letters.')
    }
    this.name = name;
  }
}

class Xmen extends Avenger2 {
  constructor(name: string, realName: string, public isMutant?: boolean) {
    super(name, realName); // super is required when it is an inherited class
  }
  getFullNameFromAvenger2() {
    console.log(super.getFullName()); // call the method
  }
}

const wolverine = new Xmen("Wolverine", "Logan");
