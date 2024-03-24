import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

import Navbar from '../Navbar/Navbar';
import  './Startpage.css';

const Startpage = () => {

  let date = new Date().toLocaleString('ru', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (

    <div className='main'>
      <div className='aboveLine'></div>
      <h2 className='dateH2' >В наличии на {date}</h2>
      <Navbar/>
      <h2 className='contactData' >Мобильный: 952 892 11 11</h2>
      <h2 className='contactData' >Whatsapp: 952 892 11 11</h2>
      <h2 className='contactData' >Email: ugolki@mail.ru</h2>
      <h2 className='contactData' >Адрес:</h2>
      <h3 className='contactData' >микрорайон Наука</h3>
      <h3 className='contactData' >ул. Нарочанская 90</h3>
      <div className='mapWrapper'>
       <YMaps>
        <div>
          <Map width={450}
               height={390} 
               defaultState = {
              { center: [56.48719833529011,85.05604923423313],
               zoom: 14,
               controls: ["zoomControl", "fullscreenControl"],
              }}
               modules={["control.ZoomControl", "control.FullscreenControl"]} >
            <Placemark defaultGeometry = {[56.48719833529011,85.05604923423313]} 
                       modules={["geoObject.addon.balloon"]}
                       properties={{
                        balloonContentBody:
                          "Нарочанская 90",
                       
                      }}
                      
            />
            <Placemark defaultGeometry = {[56.48868077480058,85.04907012637635]} 
                       modules={["geoObject.addon.balloon"]}
                       properties={{
                        balloonContentBody:
                          "Место поворота в мкр. Наука",
                      }}
            />
          </Map>
        </div>
       </YMaps>
      </div>
    </div>
  )
}

export default Startpage;