import React from 'react'

const Landing_Page = ({btnClick}) => {
  return (
    <div className=' mt-16 flex justify-center items-center w-full h-[calc(100vh-90px)]'>
        <div className='h-4/5 w-4/5 flex'>
            <div className=' w-1/2 h-full' >
                <img src="/images/dices.png" alt="daces" />
            </div>
            <div className=' w-1/2 h-full flex flex-col justify-center items-end gap-5'>
                <h1 className='font-extrabold text-7xl'>DICE GAME</h1>
                <button onClick={btnClick} className='bg-black text-white text-lg font-semibold px-8 rounded py-1 hover:bg-slate-600'>Play Now</button>
            </div>
        </div>
    </div>
  )
}

export default Landing_Page