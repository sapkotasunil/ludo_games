import React, { useEffect, useState } from 'react'
import HeaderSection from './subComponents/HeaderSection'
import DicesRoll from './subComponents/DicesRoll'

import Rules from './subComponents/Rules'

const GameZone = () => {
  const [activeButton, setActiveButton] = useState(null)
  const [activeDice, setActiveDice] = useState(1)
  const [totalScore, settotalScore] = useState(0)
  const [showRules, setshowRules] = useState(false)
  const [notSelected, setnotSelected] = useState("")

  const ResetScore=()=>{
    settotalScore(0)
  }
  const rule=()=>{
    setshowRules((prev)=>!prev)
  }

  useEffect(() => {
    if(activeButton===undefined){
      setnotSelected("You have not selected any number")
      setActiveDice(1)
      return;
    }

    if(activeButton!==null){
      {activeButton===activeDice?settotalScore((prev)=>(prev+activeButton)):settotalScore((prev)=>(prev-2))}
      setnotSelected("")

    }
   
   setActiveButton(undefined)
  }, [activeDice])
  
  

 
  return (
    <>
    <HeaderSection activeButton={activeButton} setActiveButton={setActiveButton} totalScore={totalScore} notSelected={notSelected}/>
    <DicesRoll activeDice={activeDice} setActiveDice={setActiveDice} />
  <div className='flex items-center mt-4 flex-col gap-4' >
    <button onClick={ResetScore}  className=' bg-transparent border-2 border-black border-solid py-1 px-10 text-lg text-black font-semibold'>Reset Score</button>
    <button onClick={rule}  className=' bg-black border-2 border-black border-solid py-1 px-10 text-lg text-white font-semibold'>{showRules==false?"Show":"Hide"} Rules</button>
  </div>
  {showRules==false?"":<Rules/>}
    </>
  )
}

export default GameZone