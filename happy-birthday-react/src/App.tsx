import { useState } from "react";
import "./App.css";
// import LinkButton from "./children/link";

function App() {
  const title: string = "Happy Birthday!!";
  const [num, setNum] = useState(1);
  
  const increment = () => {
    setNum(num + 1);
    console.log(num);
  };

  const decrement = () => {
    setNum(num - 1);
    console.log(num);
  };
  
  const PlantingCandle = (pageX: number) => {
    console.log("Planting Candle...");
    var candleRootElm = document.getElementById('candle-ctn') as HTMLDivElement;

    var x = pageX ;	// 水平の位置座標
    var y;
    var max;
    var min;

    // 要素の位置を取得
    var clientRect = candleRootElm.getBoundingClientRect();
    var positionX = clientRect.left + window.pageXOffset ;

    // 要素内におけるクリック位置を計算
    x = x - positionX;

    if (x < 20 || x > 280) {
      return;
    }
    console.log(x-150);
    min = Math.sqrt((1-((x-150)*(x-150)/22500))*100);
    console.log(min);
    max = 33+min;
    console.log(max);
    y = Math.random() * (max - min) + min;

    const divElm = document.createElement('div');
    divElm.classList.add('candle');
    divElm.classList.add('c1');
    if (x <= 50 || x >= 250 || y >= 40) {
      divElm.innerHTML = `
        <div class="c-base"></div>
        <div class="wick"></div>
        <div class="flame"></div>
      `
    } else {
      divElm.innerHTML = `
        <div class="c-base"></div>
        <div class="wick"></div>
        <div class="flame"></div>
        <div class="highlight"></div>
      `
    }
    divElm.style.cssText = "position:absolute;"
    + "top: "+y+"px;"
    + "left: "+x+"px;"
    candleRootElm = candleRootElm.appendChild(divElm);
  };

  return (
    <div className="App">
      <h1>{title}</h1>
      <h2>Your Age: {num}</h2>
      <div
        className="cake-body"
        onClick={( event )=>{
          PlantingCandle(event.pageX)
          increment()
        }}>
        <div className="layer f1">
          <div className="spot-group sg1">
            <div className="spot s1"></div>
            <div className="spot s2"></div>
            <div className="spot s3"></div>
          </div>
          <div className="spot-group sg2">
            <div className="spot s1"></div>
            <div className="spot s2"></div>
          </div>
        </div>
        <div className="layer f2">
          <div className="spot-group sg3">
            <div className="spot s1"></div>
            <div className="spot s2"></div>
          </div>
          <div className="spot-group sg4">
            <div className="spot s1"></div>
            <div className="spot s2"></div>
            <div className="spot s3"></div>
          </div>
        </div>
        <div className="layer f3">
          <div className="spot-group sg5">
              <div className="spot s1"></div>
              <div className="spot s2"></div>
              <div className="spot s3"></div>
          </div>
        </div>
        <div className="layer f4"></div>
        <div className="candle-ctn" id="candle-ctn">
            <div className="candle c1">
              <div className="c-base"></div>
              <div className="wick"></div>
              <div className="flame"></div>
              <div className="highlight"></div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;