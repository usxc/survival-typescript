type Person = {
  name: string;
  age?: number;
};

type RequiredPerson = Required<Person>;

// type RequiredPerson = {
//     name: string;
//     age: number;
// }

// ageがオプションでなくなっている点に注目

// Requiredは、オプションプロパティを必須プロパティにするユーティリティ型。