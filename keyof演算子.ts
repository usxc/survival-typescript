type Point = {
  x: number;
  y: number;
};

type Key = keyof Point; // type Key = keyof Point = "x" | "y"となる。
const key1: Key = "x"; // 代入OK
const key2: Key = "y"; // 代入OK
// const key3: Key = "z"; // 代入不可

// keyof演算子を使うと、object型のすべてのキーを文字列リテラルのユニオン型として取得できる。