const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved");
  }, 2000);
});

promise.then((data) => {
  console.log(data);
});

// Promiseは非同期操作の最終的な完了（または失敗）とその結果の値を表す。