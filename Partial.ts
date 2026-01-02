type Person = {
  name: string;
  age: number;
};

type OptionalPerson = Partial<Person>;

// type OptionalPerson = {
//     name?: string | undefined;
//     age?: number | undefined;
// }

// Partialは、型のすべてのプロパティをオプションにするユーティリティ型。