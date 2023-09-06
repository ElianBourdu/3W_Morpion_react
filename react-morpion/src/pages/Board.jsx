import { useContext, useState } from "react"
import { PlayerContext } from "."
import Square from "./square";

export default function Board() {
  const {
    player1,
    player2
  } = useContext(PlayerContext);

  const [whichPlayer, setWichPlayer] = useState(true);
  return(
    <>
    <p>player 1: {player1}</p>
    <p>player 2: {player2}</p>
    <p>C'est à {whichPlayer ? player1 : player2} de jouer !</p>
      <section className="grid" onClick={() => setWichPlayer(!whichPlayer)}>
        <div className="row">
          <Square symbol={whichPlayer} />
          <Square symbol={whichPlayer} />
          <Square symbol={whichPlayer} />
        </div>
        <div className="row">
          <Square symbol={whichPlayer} />
          <Square symbol={whichPlayer} />
          <Square symbol={whichPlayer} />
        </div>
        <div className="row">
          <Square symbol={whichPlayer} />
          <Square symbol={whichPlayer} />
          <Square symbol={whichPlayer} />
        </div>
      </section>
    
    </>
  )
}