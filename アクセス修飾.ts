class Person {
  public name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  introduce(): void {
    console.log(`My name is ${this.name} and I am ${this.age} years old.`);
  }
}

const john = new Person("John", 20);
console.log(john.name); // 'John'が出力される
// console.log(john.age); // エラー（privateなのでアクセスできない）Property 'age' is private and only accessible within class 'Person'.

// public(デフォルト)、protected、privateの3つのアクセス修飾子が利用できる。