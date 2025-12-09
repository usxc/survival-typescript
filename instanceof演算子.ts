class Animal {}
class Dog extends Animal {}

const dog = new Dog();

console.log(dog instanceof Dog);
console.log(dog instanceof Animal);

// instanceof演算子は、オブジェクトが特定のクラスのインスタンスであるかを判定できる。