import React, { useState } from 'react'
import Landing_Page from './Componenets/Landing_Page'
import GameZone from './Componenets/GameZone'

const App = () => {

const [gameButton, setGameButton] = useState(false)

const playBtnClicked=()=>{
  setGameButton((prev)=>(!prev))
}

  return (
    <div className='px-16' >
      {gameButton?<GameZone/>:<Landing_Page btnClick={playBtnClicked}/>}
    </div>
  )
}

export default App