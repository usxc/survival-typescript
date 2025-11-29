class Person {
  constructor(public name: string, private age: number) {}

  introduce(): void {
    console.log(`My name is ${this.name} and I am ${this.age} years old.`);
  }
}

const john = new Person("John", 20);
john.introduce();

// TypeScriptでは、コンストラクタパラメータにアクセス修飾子をつけることで、自動的にそのフィールドが定義される(constructor shorthand)。
// これによりコードの簡略化が図れる。