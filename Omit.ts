type Person = {
  name: string;
  age: number;
  address: string;
};

type PersonWithoutAddress = Omit<Person, "address">;

// type PersonWithoutAddress = {
//     name: string;
//     age: number;
// }

// Omitは、オブジェクトから特定のプロパティを省いた型を作るユーティリティ型。