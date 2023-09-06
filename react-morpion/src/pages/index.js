import Head from 'next/head'
import { Inter } from 'next/font/google'
import InputNameUser from './InputNameUser'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>React-morpion</title>
        <meta name="description" content="Next tic-tac-toe app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <InputNameUser player={1}/>
        <InputNameUser player={2}/>
        {/* 2 calls of InputNameUser component*/}
        {/* call Board component*/}
        {/*  9 calls of Square component*/}
      </main>
    </>
  )
}
