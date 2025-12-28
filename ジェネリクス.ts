// Tが型変数
function identity<T>(arg: T): T {
  return arg;
}

// 型変数Tにstringを割り当てる
const output1 = identity<string>("myString");

// 型変数Tにnumberを割り当てる
const output2 = identity<number>(100);

// TypeScriptのジェネリクスを使用すると、型の再利用性が向上し、型の一貫性を保つことができる。
// ジェネリクスを使用すると、型変数を導入でき、これにより機能の一部を一般化できる。