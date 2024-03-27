import { NavLink } from 'react-router-dom';
import { state } from '../../state';
import  './Others.css';
import SingleOthers from './SingleOthers/SingleOthers';

const Others = () => {

  const allOthers = state.others.map( (other, index) => {
    return (
      <SingleOthers key={index} name={other.name} linkToImage={other.linkToImage} price={other.price} priceKG={other.priceKG} numberInKG={other.numberInKG} amount={other.amount} amountKG={other.amountKG} linkToVideo={other.linkToVideo} />
    )
  })

  return (

    <div className='others'>
      <div className='aboveLine'></div>
      <NavLink to="/" className='backToStartLink'>На главную страницу</NavLink>
      <p>То что в наличии, можно забрать сразу, если нужно больше или других размеров, делайте заказ (ждать 3-10 дней)</p>
      {allOthers}
    </div>
  )
}

export default Others;