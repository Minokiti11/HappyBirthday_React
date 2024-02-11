import { createElement } from 'react';

//キャンドルを植える
function PlantingCandle() {
  return createElement(
    'div',
    { className: 'candle' },
  );
}

export default PlantingCandle;