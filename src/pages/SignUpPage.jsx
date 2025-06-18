import React, { useState } from 'react'

function SignUpPage() {
    const [inutValue,setInutValue] = useState("")
    const [isError, setIsError] = useState(false)
    const [isTrue, setIsTrue] = useState(false)
 
const submit =  () => {
    let rexeg = /^\+998\d{9}$/
    if(rexeg.test(inutValue)) {
        setIsTrue(true)
    }else{
        setIsError(true)
    }
}
      
  return (
    <div>
<input type="tel"  className="input" onChange={(e) => setInutValue(e.target.value)} value={inutValue} />
<button onClick={submit} className='btn '>submit</button>

{isError && <h1>hatolik</h1>}
{isTrue && <h1>Muvafoqatli</h1>}


    </div>
  )
}

export default SignUpPage
