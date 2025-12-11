class Circle {
  private _radius: number;

  constructor(radius: number) {
    this._radius = radius;
  }

  // ゲッター
  get radius(): number {
    return this._radius;
  }

  // セッター
  set radius(radius: number) {
    if (radius <= 0) {
      throw new Error("Invalid radius value");
    }
    this._radius = radius;
  }
}

const circle = new Circle(5);
console.log(circle.radius); // 5
circle.radius = 3;
console.log(circle.radius); // 3
circle.radius = -2;
// 例外: 'Invalid radius value'


// ゲッターやセッターは、オブジェクトのプロパティを取得・設定するためのメソッド。
// ゲッターはgetキーワードで、セッターはsetキーワードで定義する。