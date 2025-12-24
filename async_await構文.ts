function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function asyncFunction() {
  console.log("Start");
  await delay(2000);
  console.log("End");
}

asyncFunction();

// Start → 2秒後 → End

// 非同期処理をより直感的に書くことができるasync構文とawait構文を導入している。
// async/await 構文を使うと、非同期コードをあたかも同期コードであるかのように書ける。