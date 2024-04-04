import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import  './Component4.css';

const Component4 = () => {

  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);
  
  async function handleClick() {
    setPending(pending => pending + 1);
    await delay(3000);
    setPending(pending => pending - 1);
    setCompleted(completed + 1);
  }

  return (

    <div className='wrapper'>

      <NavLink to="/" className='backToStartLink'>Go to StartPage</NavLink>

      <h3>
        Pending: {pending}
      </h3>
      <h3>
        Completed: {completed}
      </h3>
      <button onClick={handleClick}>
        Buy     
      </button>

    </div>
  )
}

export default Component4;

function delay(ms: number) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}