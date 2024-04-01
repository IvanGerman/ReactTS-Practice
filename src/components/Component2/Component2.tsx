import { NavLink } from 'react-router-dom';
import { state } from '../../state';
import  SingleComponent2 from './SingleUgolok/SingleComponent2';
import  './Component2.css';

const Component2 = () => {

  const allUgolki = state.ugolki.map( (ugolok, index) => {
    return (
      <SingleComponent2 key={index} name={ugolok.name} linkToImage={ugolok.linkToImage} price={ugolok.price} priceKG={ugolok.priceKG} numberInKG={ugolok.numberInKG} amount={ugolok.amount} amountKG={ugolok.amountKG} linkToVideo={ugolok.linkToVideo} />
    )
  })

  return (

    <div className='ugolki'>
      <div className='aboveLine'></div>
      <NavLink to="/" className='backToStartLink'>На главную страницу</NavLink>
      <p>То что в наличии, можно забрать сразу, если нужно больше или других размеров, делайте заказ (ждать 3-10 дней)</p>
      {allUgolki}
    </div>
  )
}

export default Component2;
