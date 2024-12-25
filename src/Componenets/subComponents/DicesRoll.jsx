import React, { useState } from 'react'

const DicesRoll = ({activeDice, setActiveDice}) => {

    const randomNumber=(max,min)=>{
        return Math.floor(Math.random() * (max - min + 1) ) + min;
        
    }


const randomDice=()=>{
    setActiveDice(randomNumber(6,1))
    console.log("preseed")
    
}

  return (
    <div className='flex flex-col items-center mt-4'>
        <button onClick={randomDice}><img src={`/images/dice/dice_${activeDice}.png`} alt="" /></button>
        <p className='text-lg font-semibold'>Click on Dice to Roll</p>
        
    </div>
  )
}

export default DicesRoll