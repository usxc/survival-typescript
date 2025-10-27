let value: string | number;
// 50%の確率でstring型またはnumber型の値を代入する
value = Math.random() < 0.5 ? "Hello" : 100;

if (typeof value === "string") {
  // この節ではvalueはstring型として扱われる
  console.log(value.toUpperCase());
} else {
  // この節ではvalueはnumber型として扱われる
  console.log(value * 3);
}

// 条件分岐を利用すると、その節内では型が自動的に絞り込まれる(制御フロー分析と型ガードによる型の絞り込み)。