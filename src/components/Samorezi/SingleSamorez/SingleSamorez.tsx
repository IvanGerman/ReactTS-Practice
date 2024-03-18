import { ItemDescriptionType } from '../../../ts-types';
import  './SingleSamorez.css';

export const SingleSamorez = (props: ItemDescriptionType) => {

  return (

    <div className='singleSamorezWrapper'>
      <h3>{props.name}</h3>
      <div>
        <img src={props.linkToImage} alt="" />
      </div>
      <h4>Цена: {props.price}</h4>
      <h4>Штук в наличии: {props.amount}</h4>
      <div>
        <video src={props.linkToVideo}></video>
      </div>
    </div>
  )
}

export default SingleSamorez;
