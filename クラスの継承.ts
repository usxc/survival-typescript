class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet(): string {
    return `Hello, my name is ${this.name}`;
  }
}

class Dog extends Animal {
  bark(): string {
    return "Woof!";
  }
}

const dog = new Dog("Max");
console.log(dog.greet());
console.log(dog.bark());

// extendsキーワードにより、クラスの継承が可能。
// スーパークラスのプロパティ・メソッドの値は、サブクラスからアクセス可能。