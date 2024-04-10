//@ts-nocheck
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import  './Component6.css';

const Component6 = () => {

  const [player, setPlayer] = useState({
    firstName: 'Ranjani',
    lastName: 'Shettar',
    score: 10,
  });

  function handlePlusClick(e) {
    let currentScore = player.score + 1;
    setPlayer({
      ...player,
      score: currentScore,
    });
    
  }

  function handleFirstNameChange(e) {
    setPlayer({
      ...player,
      firstName: e.target.value,
    });
  }

  function handleLastNameChange(e) {
    setPlayer({
      ...player,
      lastName: e.target.value
    });
  }


  return (

    <div className='wrapper'>

      <NavLink to="/" className='backToStartLink'>Go to StartPage</NavLink>

      <label>
        Score: <b>{player.score}</b>
        {' '}
        <button onClick={handlePlusClick}>
          +1
        </button>
      </label>
      <label>
        First name:
        <input
          value={player.firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Last name:
        <input
          value={player.lastName}
          onChange={handleLastNameChange}
        />
      </label>
    

    </div>
  )
}

export default Component6;







