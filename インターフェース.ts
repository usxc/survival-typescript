interface Printable {
  print(): void;
}

class MyClass implements Printable {
  print(): void {
    console.log("Hello, world!");
  }
}

// TypeScriptのインターフェースは、プロパティ、メソッド、クラスなどの形状を定義する能力を持つ。
// インターフェースを使用する主な目的は、特定のクラスまたはオブジェクトが特定のプロパティまたはメソッドを保持することを強制する。