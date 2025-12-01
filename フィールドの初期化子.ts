class Counter {
  count = 0; // 初期値を0に設定
  //    ^^^初期化子

  increment(): void {
    this.count++;
  }
}

const counter = new Counter();
console.log(counter.count); // 0
counter.increment();
console.log(counter.count); // 1

// フィールド宣言の際に直接初期値を設定できる(フィールドの初期化子)。