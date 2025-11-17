function greet(name?: string) {
  if (name === undefined) {
    return "Hello!";
  } else {
    return `Hello ${name}!`;
  }
}

console.log(greet("John")); // 'Hello John!'
console.log(greet()); // 'Hello!'

// 関数の引数には?をつけることで任意とすることができる(オプション引数)。