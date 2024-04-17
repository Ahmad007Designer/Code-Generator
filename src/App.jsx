import { useState,useCallback, useEffect,useRef } from 'react'
import './App.css'
function App() {
  const [length, setlength] = useState(8)
  const[charAllow,setcharAllow]=useState(false)
  const [numAllow,setnumAllow]=useState(false)
  const [Password,setpassword]=useState("s")
  const passwordGenrator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllow) str+="0123456789"
    if(charAllow) str +="!@##$%^&*(){}[]"

    //random number generate
    for(let i=1; i<=length; i++){
      let char= Math.floor(Math.random()* str.length + 1)
      pass +=str.charAt(char)
    }
    setpassword(pass)

  } ,[length,charAllow,numAllow,setpassword]);

  const passwordRef=useRef(null)

  const  copyPassword=useCallback(()=>{
    passwordRef.current ?.select()
    // passwordRef.current?.setSelectionRange(0,3);
    window.navigator.clipboard.writeText(Password)
  },[Password])
  

  useEffect(()=>{
    passwordGenrator()
  },[length,charAllow,numAllow,setpassword])
  return (

    <>
      <div className='max-w-md mx-auto m-2 text-white rounded-xl py-4 gap-2  bg-blue-600'>
        <h1 className='font-bold'>Password Generator</h1>
      </div>
      <div className='w-full max-w-md mx-auto text-orange-500 shadow-md rounded-lg px-4 py-4  bg-gray-700 '>Test
      
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>

        <input 
        className='px-1 py-3 outline-none w-full'
        type="text"  value={Password}
        placeholder="Password"
        readOnly
        ref={passwordRef}
         />
      <button
      onClick={copyPassword}
       className='bg-blue-600 px-3 py-2 text-white hover:bg-green-400'>Copy</button>
      </div>
      <div className='flex gap-2 items-center w-full'>

      <p>
      <input type="range"
      min={6}
      max={100}
      value={length}
      className='cursor-pointer m-1'
      onChange={(e)=>{setlength(e.target.value)}} />
      Length: {length}
      </p>

        <p><input 
        defaultChecked={numAllow}
        id="inputNum"
        onChange={()=>{
        setnumAllow((prev)=> !prev)
        }}
        type="checkbox" className="form-check-input" /> Number</p>

        <p><input
        defaultChecked={charAllow}
        id='inputChar'
        onChange={()=>{
          setcharAllow((prev)=>!prev)
        }}
        type="checkbox" className="form-check-input" /> Characters</p>
        
      </div>
      
      
      </div>
      
    </>
  )
}

export default App

