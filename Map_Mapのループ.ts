let map: Map<string, number> = new Map<string, number>([
  ["apple", 1],
  ["banana", 2],
  ["orange", 3]
]);

for (const [key, value] of map) {
  console.log(key, value);
}

// Mapオブジェクトはfor...ofでループすると、各エントリーがキーと値の配列として順に取得できる。
// 要素の順序は、要素を追加した順が保証されている。