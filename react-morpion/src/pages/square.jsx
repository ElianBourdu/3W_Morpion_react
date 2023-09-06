import { useState } from "react"

export default function Square({symbol}) {

  const [fill, setFill] = useState('');

  function handleClick() {
    setFill(symbol ? 'O' : 'X');
  }
  return (
    <>
      <button className="square" onClick={handleClick}>{fill}</button>
    </>
  )
}