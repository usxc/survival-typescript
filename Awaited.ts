const promise1 = Promise.resolve("data");
const promise2 = Promise.resolve(Promise.resolve("data"));

type Data1 = Awaited<typeof promise1>; 
// type Data1 = string

type Data2 = Awaited<typeof promise2>;
// type Data2 = string


// Awaitedは、Promiseの戻り値の型を取得するユーティリティ型。