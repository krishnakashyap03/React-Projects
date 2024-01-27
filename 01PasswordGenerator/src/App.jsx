import { useCallback, useState, useEffect , useRef} from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setnumAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const PasswordGenerator = useCallback(() =>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*(){}[]+-/_"

    for (let i = 1; i <= length; i++) {
      const chooseChar = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(chooseChar)
    }
    setPassword(pass)

  }, [length, numAllowed, charAllowed, setPassword]) // we use dependencies in useCallback to again optimise the denpendecies if something is Changed in these Dependencies

  const copyPasswordtoClipboard = useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {
    PasswordGenerator()
  },[length ,numAllowed, charAllowed, PasswordGenerator]) // we use dependencies in useeffect to again run the callback if something is Changed in these Dependencies

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className='text-white text-center'>Password Generator</h1>

        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={password} className='outline-none w-full py-1 px-3'
          placeholder='Password' readOnly ref={passwordRef} />
          <button onClick={copyPasswordtoClipboard()} className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">Copy</button>
        </div> 
        
        <div className='flex text-sm gap-x-2'>

          <div className='flex items-center gap-x-1'>
            <input type="range" value={length} min={6} max={50} className='curosr-pointer' 
            onChange={(e) => {setLength(e.target.value)}} />
            <label> Length: {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={numAllowed} id='numberInput'
            onChange={() => {setnumAllowed((prev)=> !prev)}} />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={charAllowed} id='charInput'
            onChange={() => {setcharAllowed((prev)=> !prev)}} />
            <label htmlFor="charInput">Characters</label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
