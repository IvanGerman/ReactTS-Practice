
import Navbar from '../Navbar/Navbar';
import  './Component1.css';

const Component1 = () => {

  let date = new Date().toLocaleString('en', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (

    <div className='main'>
      <div className='aboveLine'></div>
      <h2 className='dateH2' >Today is {date}</h2>
      <Navbar/>
    </div>
  )
}

export default Component1;