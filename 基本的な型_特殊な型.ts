const a: any = 100; // 代入できる
console.log(a * 3); // 操作もできる

const x: unknown = 100; // 代入はできる
// console.log(x * 3); // 操作はできない

// 戻り値のない関数
function doSomething(): void {}

// 戻り値を返すことがありえない関数
function throwError(): never {
  throw new Error();
}

// any: 何でも代入できる型。型が不明な場合に使用する。その値に対する操作の制限がなく、型の安全性は弱まる。
// unknown: any型と似て、何でも代入できる型。その値に対する操作は制限され、型の安全性が保たれる。
// void: 値が存在しないことを示す。関数が何も返さない場合に使用する。
// never: 決して何も返さないことを示す。エラーを投げる関数や無限ループの関数の戻り値として使用する。