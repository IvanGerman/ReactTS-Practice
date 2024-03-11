import Navbar from '../Navbar/Navbar';
import  './Startpage.css';

const Startpage = () => {

  return (

    <div className='main'>
      <h2>В наличии на 01.05.24:</h2>
      <Navbar/>
      <h2>Мобильный: 952 892 11 11</h2>
      <h2>Whatsapp: 952 892 11 11</h2>
      <h2>Адрес:</h2>
      <h3>микрорайон Наука, ул. Нарочанская 90</h3>
      <div>здесь карта</div>
    </div>
  )
}

export default Startpage;