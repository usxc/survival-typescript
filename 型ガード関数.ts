function isString(value: any): value is string {
  return typeof value === "string";
}

function printLength(value: any) {
  if (isString(value)) {
    // この節ではvalueはstring型として扱われる
    console.log(value.length);
  }
}

printLength("hello");