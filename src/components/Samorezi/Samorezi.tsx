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
      {allSamorezi}
    </div>
  )
}

export default Samorezi;