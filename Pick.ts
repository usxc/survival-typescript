type Person = {
  name: string;
  age: number;
  address: string;
};

type PersonNameAndAge = Pick<Person, "name" | "age">;

// type PersonNameAndAge = {
//     name: string;
//     age: number;
// }

// Readonlyは、型のすべてのプロパティをreadonlyにするユーティリティ型。それらのプロパティは再代入できない。