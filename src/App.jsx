import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Picture from './component/Picture'
import FullBox from './component/FullBox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        test
        <button>test</button>
        
        
      </div>

      <div>
        <FullBox></FullBox>

      </div>
     
    </>
  )
}

export default App
