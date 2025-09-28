const numbers: readonly number[] = [1, 2, 3];
const strings: ReadonlyArray<string> = ["hello", "world"];

// numbers[0] = 4; // 値を変更できない
// strings.push("!"); // 要素を追加できない

// 読み取り専用配列は値の変更ができない配列を表す。
// 配列の型注釈にreadonlyをつけると読み取り専用配列となる。
// ReadonlyArray<型名>でも読み取り専用配列が宣言でき、readonly 型名[]と機能は同じ。