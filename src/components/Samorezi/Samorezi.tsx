import { NavLink } from 'react-router-dom';
import { state } from '../../state';
import  './Samorezi.css';
import SingleSamorez from './SingleSamorez/SingleSamorez';


const Samorezi = () => {

  const allSamorezi = state.samorezi.map( (samorez, index) => {
    return (
      <SingleSamorez key={index} name={samorez.name} linkToImage={samorez.linkToImage} price={samorez.price} priceKG={samorez.priceKG} numberInKG={samorez.numberInKG} amount={samorez.amount} amountKG={samorez.amountKG} linkToVideo={samorez.linkToVideo} />
    )
  })

  return (

    <div className='samorezi'>
      <div className='aboveLine'></div>
      <NavLink to="/" className='backToStartLink' >На главную страницу</NavLink>
      <p>То что в наличии, можно забрать сразу, если нужно больше или других размеров, делайте заказ (ждать 3-10 дней)</p>
      {allSamorezi}
    </div>
  )
}

export default Samorezi;