import { NavLink } from 'react-router-dom';
import { state } from '../../state';
import  './Samorezi.css';
import SingleSamorez from './SingleSamorez/SingleSamorez';


const Samorezi = () => {

  const allSamorezi = state.samorezi.map( (samorez, index) => {
    return (
      <SingleSamorez key={index} name={samorez.name} linkToImage={samorez.linkToImage} price={samorez.price} amount={samorez.amount} linkToVideo={samorez.linkToVideo} />
    )
  })

  return (

    <div className='samorezi'>
      <div className='aboveLine'></div>
      <NavLink to="/" className='backToStartLink' >На главную страницу</NavLink>
      {allSamorezi}
    </div>
  )
}

export default Samorezi;