try {
  throw new Error("Oops, something went wrong.");
} catch (error) {
  console.log(error);
} finally {
  console.log("This is the finally block. It always gets executed.");
}

// tryブロック内のコードは、エラーを検出し、catchブロックはエラーをハンドリングする。
// finallyブロックはエラーの有無に関係なく実行される。