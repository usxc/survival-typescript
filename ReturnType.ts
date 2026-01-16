function stringify(value: number): string {
  return `${value}`;
}

type StringifyReturnType = ReturnType<typeof stringify>;
// type StringifyReturnType = string


// ReturnTypeは、関数の戻り値の型を取得するユーティリティ型。