class MyClass {
  static x = 0;

  static printX(): void {
    console.log(MyClass.x);
  }
}

MyClass.printX();

// staticキーワードを使うことで、インスタンスではなくクラス自体に関連するフィールドやメソッドを定義できる(静的フィールド、静的メソッド)。