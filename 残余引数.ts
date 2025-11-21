function sum(...numbers: number[]) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4, 5));

// ...を使って残余引数(任意の数の引数)を設定することができる。