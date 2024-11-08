import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Siderbar from './componments/Siderbar'
import Player from './componments/Player'
import Display from './componments/Display'
import { PlayerContext } from './context/PlayerContext'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const {audioRef,track} = useContext(PlayerContext); 

  return (
    <div className='h-screen  bg-black'> 
      <div className='h-[90%] flex'>
        <Siderbar/>
        <Display/>
      </div>
      <Player/>
      <audio ref={audioRef} src={track.file} preload='auto' controls></audio>
    </div>
  )
}

export default App
