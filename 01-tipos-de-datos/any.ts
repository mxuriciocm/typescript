let avenger: any = 123;
let exits;
let power;

avenger = "Dr Strange";
console.log((avenger as string).charAt(0)); // casting using 'as string', this set datatype to string without affecting the main datatype 'any'

avenger = 150.12331;
console.log(<number>avenger.toFixed(2)); // another option to casting, using <datatype>, in this case <number>

console.log(exits);
console.log(power)
