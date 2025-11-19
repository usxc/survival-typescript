function greet(name: string = "Mystery") {
  return `Hello ${name}!`;
}

console.log(greet("John")); // 'Hello John!'
console.log(greet()); // 'Hello Mystery!'

// 関数の引数には=を使ってデフォルトの値を設定することができる(デフォルト引数)。