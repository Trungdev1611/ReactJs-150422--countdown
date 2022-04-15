import { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {  // useeffect chay sau moi lan render (ke ca cac lan re-render va first render)
    console.log("useEffect o day")


  }, [count])   // dependencies la []: chi chay useEffect 1 lan render dau tien; dependencies khong duoc truyen: Useeffect thuc thi sau moii lan render
  // dependencies la mang chua gia tri thi chi khi gia tri do thay doi moi chay useEffect
  useEffect(() => {
    let number = 1000
    let id = setInterval(function () {
      number -= 1
      console.log(number)
    }, 1000)
    console.log((id))

    // ham return trong useEffect duoc dung voi nhung sideEffect, de don dep cac sideEffect nhu setTimeout, setInterval... khi ma ket thuc ham roi van con ton tai rac thi ham return torng useEffect se dung de don dep chung

    return () => {
      // clearInterval(id);
    }
  }, [])


  return (
    <div className="App">

      <h1 >{count}</h1>
      <div className="buttons">
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
        <button onClick={() => setCount(0)}>Reset</button>

      </div>


    </div>
  );
}

export default App;
