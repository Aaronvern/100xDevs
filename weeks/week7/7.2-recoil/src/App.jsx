
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom, evenSelector } from "./store/atoms/Count";
import { useMemo } from "react";

function App() {
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  )
}

function Count() {
  console.log("re-render");
  return <div>
    <CountRenderer />
    <Buttons />
    <Even/>
  </div>
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  
  return <div>
    <b>
      {count}
    </b>
   
  </div>
}

function Even(){
  const input = useRecoilValue(evenSelector);
  return (
    <>
      <h2>{input ? "it is not even" : "it is even" }</h2>
    </>
  )
}

function Buttons() {
  const setCount = useSetRecoilState(countAtom);
  console.log("buttons re-rendererd");

  return <div>
    <button onClick={() => {
      setCount(count => count + 1)
    }}>Increase</button>

    <button onClick={() => {
      setCount(count => count - 1)
    }}>Decrease</button>
  </div>
}

export default App