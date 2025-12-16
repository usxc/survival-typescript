interface Point {
  readonly x: number;
  readonly y: number;
  sum(): number;
}

const point: Point = {
  x: 10,
  y: 20,
  sum: function () {
    return this.x + this.y;
  },
};

// TypeScriptのインターフェースはオブジェクトの形状を定義することが可能。
// インターフェースはプロパティやメソッドのシグネチャを記述できる。