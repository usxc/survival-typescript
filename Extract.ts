type T1 = number | string | boolean;
type T2 = string | boolean;

type T3 = Extract<T1, T2>;
// type T3 = string | boolean

// Extractは、ふたつのユニオン型の共通の部分を抽出するユーティリティ型。