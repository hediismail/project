import { React, useState } from 'react'
import Profileslist from '../Components/profileslist/profiles list'

const Home = () => {
  const [région, setRégion] = useState('All The Régions')
  return (
    <div>
      <select className="btnselect" onChange={(e) => setRégion(e.target.value)}>
        <option id="pass" value="All The Régions">
          All The Régions
        </option>
        <option id="pass" value="Tunis">
          Tunis
        </option>
        <option id="pass" value="Ariana">
          Ariana
        </option>
        <option id="pass" value="Ben Arous">
          Ben Arous
        </option>
        <option id="pass" value="Mannouba">
          Mannouba
        </option>
      </select>

      <Profileslist région={région} />
    </div>
  )
}

export default Home
