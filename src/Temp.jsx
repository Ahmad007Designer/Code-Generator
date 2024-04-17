import{useCallback, useState} from 'react'

function Temp() {

    const [length,setlength]=useState(8)
    const[allowNum,setallowNum]=useState(false)
    const [allowChar,setallowChar]=useState(false)
    const [password,setpassword]=useState("")
    const togeneratePsd=useCallback(()=>{
        let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        let psw=""
        if(allowNum) str+="0123456789"
        if(allowChar) str+="~!@#$%^&*(){}}]["
        for(let i=1;i<=Array.length;i++){
            let index = Math.floor(Math.random()*str.length+1)
            psw=str.charAt(index)
        }
        setpassword(psw)
    },[length,allowNum,allowChar,password])    




  return (
    <div>
      
    </div>
  )
}

export default Temp
