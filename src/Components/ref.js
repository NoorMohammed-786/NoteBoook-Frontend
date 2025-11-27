import { useRef } from "react";

function App() {
  const inputBox = useRef();  // create ref

  function focusInput() {
    inputBox.current.focus();  // use ref
  }

  return (
    <>
      <input ref={inputBox} />
      <button onClick={focusInput}>Click to Focus</button>
    </>
  );
}
export default App;