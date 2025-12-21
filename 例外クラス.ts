class CustomError extends Error {
  code = "CustomError";

  constructor(message?: string) {
    super(message);
  }
}

try {
  throw new CustomError("This is a custom error");
} catch (error) {
  if (error instanceof CustomError) {
    console.log(`${error.code}: ${error.message}`);
  }
}

// TypeScriptでは、カスタムエラークラスを作成することも可能。
// Errorクラスを継承したカスタムクラスで、具体的なエラータイプを作成することができる。