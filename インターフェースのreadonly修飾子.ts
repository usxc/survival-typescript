interface Point {
  readonly x: number;
  readonly y: number;
}

const p1: Point = { x: 10, y: 20 };
// p1.x = 5; Cannot assign to 'x' because it is a read-only property.

// インターフェース内でreadonly修飾子を使用して、プロパティを読み取り専用に設定できる。
// これにより、プロパティの値が一旦設定されると後から変更できなくなる。