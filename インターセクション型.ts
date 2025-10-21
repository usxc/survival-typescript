type Octopus = { swims: boolean };
type Cat = { nightVision: boolean };
type Octocat = Octopus & Cat;

const octocat: Octocat = { swims: true, nightVision: true };

console.log(octocat); 
// { swims: true, nightVision: true }

// インターセクション型は複数の型を1つに結合した新しい型を定義する。
// 型1 & 型2 & ...の形式で使う。
// その結果として生じた型は、それぞれの型が持つすべてのプロパティとメソッドを備えている。