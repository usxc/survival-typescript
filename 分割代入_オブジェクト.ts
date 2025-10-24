const obj = {
  name: "John",
  age: 20,
};

const { name: userName, age } = obj;
console.log(userName);
console.log(age);

// 分割代入により、オブジェクトのプロパティを個別の変数へ代入できる(オブジェクトの分割代入)。