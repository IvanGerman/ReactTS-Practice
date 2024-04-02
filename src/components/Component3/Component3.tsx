import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import  './Component3.css';

const Component3 = () => {

  const [walk, setWalk] = useState(true);
  
  function handleClick() {
    if (walk) {
      alert('Stop is next')
    } else {
      alert('Walk is next')
    }
    setWalk(!walk);
  }

  return (

    <div className='wrapper'>

      <NavLink to="/" className='backToStartLink'>Go to StartPage</NavLink>

      <button onClick={handleClick}>
        Change to {walk ? 'Stop' : 'Walk'}
      </button>
      <h1 style={{
        color: walk ? 'darkgreen' : 'darkred'
      }}>
        {walk ? 'Walk' : 'Stop'}
      </h1>

    </div>
  )
}

export default Component3;