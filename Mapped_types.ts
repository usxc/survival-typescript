type Person = {
  name: string;
  age: number;
};

type ReadOnlyPerson = { readonly [K in keyof Person]: Person[K] };

// Mapped typesを使うと、既存の型から新しい型を生成できる。
// Mapped typesは、オブジェクトの各プロパティを”マップ”し、新しいオブジェクトを生成する。