type T1 = number | string | boolean;
type T2 = Exclude<T1, boolean>;

// type T2 = string | number

// Excludeは、ユニオン型から特定の型を除外するユーティリティ型。