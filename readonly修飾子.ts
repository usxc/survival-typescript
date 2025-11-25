class Person {
  readonly name: string;
  private readonly age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  introduce(): void {
    console.log(`My name is ${this.name} and I am ${this.age} years old.`);
  }
}

const john = new Person("John", 20);
// john.name = "Tom"; // エラー（readonlyのため変更不可）Cannot assign to 'name' because it is a read-only property.

// readonly修飾子をつけたプロパティは、読み取り専用となる。
// readonly修飾子はアクセス修飾子と併用可能。