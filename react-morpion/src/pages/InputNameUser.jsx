import {useState} from 'react'
export default function inputNameUser(player) {
  const [username, setUsername] = useState('')
  // usecontext instead of usestate

  return (
    <header>
      <label htmlFor="username">entrez votre nom</label>
      <input
        type='text'
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
    </header>
  )
}