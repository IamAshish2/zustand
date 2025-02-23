import { useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useBearStore } from './store/BearStore'
import Board from './pages/tictactoe/Board'

const App: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { bears, increasePopulation, removeAllBears, updateBears } = useBearStore();

  function handleUpdateBears() {
    const inputVal = inputRef.current?.value;
    if (inputVal) {
      const bearCount = Number(inputVal);
      if (!(isNaN(bearCount))) {
        updateBears(bearCount);
      } else {
        alert("Please enter a valid bear number.");
      }
    }
  }

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Keep track of the bear count</h1>
      <div className="card ">
        <div>
          count is {bears}
        </div>
        <button onClick={increasePopulation}>
          increase bears
        </button>

        <button onClick={removeAllBears}>
          Remove all bears
        </button>
        <div className='update-bears-section'>
          <input ref={inputRef} type="text" className='input' />
          <button onClick={handleUpdateBears}>
            update Bears
          </button>
        </div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <Board />
    </>
  )
}

export default App

