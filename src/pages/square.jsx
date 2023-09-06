import { useState } from "react"

export default function Square({symbol, onClick, value}) {
  const [fill, setFill] = useState(value);

  function handleClick() {
    setFill(symbol ? 'O' : 'X');
  }
  return (
    <>
      <button className="square" onClick={() => {handleClick(); onClick()}}>{fill ? fill : '_'}</button>
    </>
  )
}