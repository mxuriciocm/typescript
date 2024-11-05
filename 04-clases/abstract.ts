abstract class Mutant {
  constructor(public name: string, public realName: string) {}
}

class Xmen extends Mutant {}
class Villian extends Mutant {}

const wolverine = new Xmen("Wolverine", "Logan");
const magneto = new Villian("Magneto", "Magnus");
