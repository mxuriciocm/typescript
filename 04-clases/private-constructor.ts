class Apocalipsis {
  static instance: Apocalipsis;
  constructor(public name: string) {}
  static callApocalipsis(): Apocalipsis {
    if (!Apocalipsis.instance) {
      Apocalipsis.instance = new Apocalipsis("asd");
    }
    return Apocalipsis.instance;
  }
}

const apocalipsis = new Apocalipsis("asd");
