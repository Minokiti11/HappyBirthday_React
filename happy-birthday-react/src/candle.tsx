import { createElement } from 'react';

//キャンドルを植える
function PlantingCandle() {
  console.log("Planting Candle...");
  return createElement(
    'div',
    { className: 'candle c1 c-base wick flame highlight' },
  );
}

export default PlantingCandle;