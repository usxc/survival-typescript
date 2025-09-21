type Summary = { name: string };
type Detail = { name: string; age: number };

const johnDetail: Detail = { name: "John", age: 28 };
const summary: Summary = johnDetail; // 代入できる。構造的部分型として互換があるため

const johnSummary: Summary = { name: "John" };
// const detail: Detail = johnSummary; // 代入できない。構造的部分型として互換がない（ageを含まないため）

// TypeScriptは構造的部分型を採用している。
// 構造的部分型では、変数の代入可否を、構造が互換しているかに着目して判定する。
// その部分集合ならおｋ