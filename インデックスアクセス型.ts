type Person = {
  name: string;
  age: number;
};

type Name = Person["name"];

// インデックスアクセス型を使うと、型のプロパティの型を取得できる。