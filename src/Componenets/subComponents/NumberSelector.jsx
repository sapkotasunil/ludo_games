

const NumberSelector = ({value,setActiveButton, IsActive}) => {

     
  return (
   <>
  <button onClick={()=>{setActiveButton(value);}} 
  className={`border-2 border-solid text-2xl border-black px-5 py-2 text-black 
  ${IsActive?'bg-black text-white':'bg-white text-black'}`}>{value}</button> 
   </>
  )
}

export default NumberSelector


       