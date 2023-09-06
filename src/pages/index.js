import Head from 'next/head'
import InputNameUser from './InputNameUser'
import { useState, createContext } from 'react';
import Board from './Board';

export const PlayerContext = createContext(null);

export default function Home() {
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  return (
    <>
      <Head>
        <title>React-morpion</title>
        <meta name="description" content="Next tic-tac-toe app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <PlayerContext.Provider value={{player1, setPlayer1, player2, setPlayer2}}>
          {player1 === '' && player2 === '' && (
            <InputNameUser playerNumber={1} />
          )}
          {player1 !== '' && player2 === '' && (
            <InputNameUser playerNumber={2} />
          )}
          {player1 !== '' && player2 !== '' && (
             <Board />
          )}
        </PlayerContext.Provider>
        
        {/* 2 calls of InputNameUser component*/}
        {/* call Board component*/}
        {/*  9 calls of Square component*/}
      </main>
    </>
  )
}