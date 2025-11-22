class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  introduce(): void {
    console.log(`My name is ${this.name} and I am ${this.age} years old.`);
  }
}

const john = new Person("John", 20);
john.introduce(); // 'My name is John and I am 20 years old.'

// JavaScriptのクラス構文はそのまま利用できる。
// フィールド宣言に型注釈をつけることができる。