import { useState } from "react";
import LinkButton from "./children/link";

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
      {/* <LinkButton text="+" link="/test" /> */}
      <button type="button" onClick={increment}>
        +
      </button>
      <button type="button" onClick={decrement}>
        -
      </button>
      <p><img src={`${process.env.PUBLIC_URL}/cake.png`}></img></p>
    </div>
  );
}

export default App;