import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

import { useState } from 'react';


function App() {
  const [Count, setCount] = useState(0)

  return (
    <div>
      <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center bg-[#344151] gap-10">
        <div className="text-[#0398d4] font-medium text-[20px]">Increment and Decrement</div>
        <div className='bg-white flex text-[25px] text-[#344151] rounded-sm gap-12 p-3 px-5'>
          <button onClick={()=>setCount(Count-1)}className="border-r-2 border-[#bfbfbf] pr-5">
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <div id='counter' className='font-bold'>{Count}</div>
          <button onClick={()=>setCount(Count+1)} className="border-l-2 border-[#bfbfbf] pl-5">
            <FontAwesomeIcon icon={faPlus}/>

          </button>
        </div>

      </div>
    </div>
  );
}

export default App;
