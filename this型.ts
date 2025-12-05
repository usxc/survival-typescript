class MyClass {
  value = 1;

  increment(): this {
    this.value++;
    return this;
  }

  add(v: number): this {
    this.value += v;
    return this;
  }

  print(): this {
    console.log(this.value);
    return this;
  }
}

new MyClass().increment().add(3).print();

// メソッド内でthisを返すことで、メソッドの呼び出しを直列につなげるメソッドチェーンを可能にする(メソッドチェーン)。