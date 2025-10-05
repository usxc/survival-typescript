function printLength(obj: { a?: string }) {
  console.log(obj.a?.length);
}
printLength({ a: "hello" }); // 5
printLength({}); // undefined

// プロパティが存在するかどうか不確定である場合、?.演算子（オプショナルチェーン）で安全にアクセスできる。