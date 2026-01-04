type Person = {
  name: string;
  age: number;
};

type ReadonlyPerson = Readonly<Person>;

// type ReadonlyPerson = {
//     readonly name: string;
//     readonly age: number;
// }

// Readonlyは、型のすべてのプロパティをreadonlyにするユーティリティ型。それらのプロパティは再代入できない。