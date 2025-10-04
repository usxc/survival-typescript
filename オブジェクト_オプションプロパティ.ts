let object: { name: string; age?: number };
object = { name: "John" }; // `age`プロパティがなくてもエラーにならない

// オプションプロパティ?をつけたプロパティは省略可能。