import { useState } from "react";
import "./App.css";
// import LinkButton from "./children/link";

function App() {
  const title: string = "Happy Birthday!!";
  const [num, setNum] = useState(0);
  
  const increment = () => {
    setNum(num + 1);
    console.log(num);
  };

  const decrement = () => {
    setNum(num - 1);
    console.log(num);
  };

  return (
    <div className="App">
      <h1>{title}</h1>
      Your Age: {num}
      <button type="button" onClick={increment}>
        +
      </button>
      <button type="button" onClick={decrement}>
        -
      </button>
      <div className="cake-body">
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
        <div className="candle-ctn">
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