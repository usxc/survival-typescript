const printCoord = ({ x, y }: { x: number; y: number }) => {
  console.log(`Coordinate is (${x}, ${y})`);
};

printCoord({ x: 10, y: 20 });

// 関数の引数に配列またはオブジェクトリテラルを展開することができる(分割代入引数)。