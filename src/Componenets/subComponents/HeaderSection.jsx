
import NumberSelector from './NumberSelector'

const HeaderSection = ({activeButton, setActiveButton,totalScore,notSelected}) => {
const number=[1,2,3,4,5,6]

  return (
   <main className=' h-36 w-full flex justify-between items-center'>
    <div>
        <h1 className=' font-semibold text-9xl'>{totalScore}</h1>
        <p>Total Score</p>
    </div>
    <div>
   <p className='text-red-800 underline text-lg flex justify-end pr-2'>{notSelected}</p>

    <div className='flex justify-end items-center gap-3 pr-2'>
     {
     number.map((value,i)=>{
     return( <NumberSelector  value={value}  key={i} IsActive={activeButton===value}  setActiveButton={setActiveButton}/>     
     )
     })}  
        </div >
        <p className='font-semibold flex pr-2 justify-end'>Selecte Number</p>
        </div>

   </main>
  )
}

export default HeaderSection