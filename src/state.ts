import { StateType } from "./ts-types";
import Image1 from './assets/images/sam-chor-36.jpg';
import Image2 from './assets/images/sam-chor-41.jpg';
import Image3 from './assets/images/sam-chor-64.jpg';



export const state: StateType = {
  ugolki: [
    { name: 'Уголок усилённый 50*50*35 мм', linkToImage : '12345.png', linkToVideo : 'https://www.youtube.com/embed/UceGBqwYDyQ', amount : 200, price : 9 },
    { name: 'Уголок  60*60*50 мм', linkToImage : '99345.png', linkToVideo : 'https://www.youtube.com/embed/r3tZ-x1AFSw', amount : 100, price : 13 },
    { name: 'Уголок усилённый 98*98*88 мм', linkToImage : '98345.png', linkToVideo : 'https://www.youtube.com/embed/QlC0U_ASDC0', amount : 20, price : 42 },
  ],
  samorezi: [
    { name: 'Саморез чёрный 3,5*36 мм', linkToImage : Image1, linkToVideo : 'https://www.youtube.com/embed/-hZ6cJWZu4Y', amount : 2200, price : 40 },
    { name: 'Саморез чёрный 3,5*41 мм', linkToImage : Image2, linkToVideo : 'https://www.youtube.com/embed/H-_RIa4RzLA', amount : 1200, price : 0.5 },
    { name: 'Саморез чёрный 4,2*64 мм', linkToImage : Image3, linkToVideo : 'https://www.youtube.com/embed/Y91EVb6C4lg', amount : 800, price : 0.8 },
    { name: 'Саморез чёрный 4,2*70 мм', linkToImage : Image3, linkToVideo : 'https://www.youtube.com/embed/w6wwp1DvTT0', amount : 800, price : 0.8 },
    { name: 'Саморез оцинкованный 5*50 мм', linkToImage : Image3, linkToVideo : 'https://www.youtube.com/embed/9Rlzjtb6hj4', amount : 800, price : 0.8 },
    { name: 'Саморез оцинкованный 4*70 мм', linkToImage : Image3, linkToVideo : 'https://www.youtube.com/embed/KYx0XOTjmJM', amount : 800, price : 0.8 },
    { name: 'Саморез оцинкованный 4,2*76 мм', linkToImage : Image3, linkToVideo : 'https://www.youtube.com/embed/hwiUdGWaI3M', amount : 800, price : 0.8 },
    { name: 'Саморез оцинкованный 6*160 мм', linkToImage : Image3, linkToVideo : 'https://www.youtube.com/embed/evfHIqGOkUw', amount : 800, price : 0.8 },
    
  ],
  others: [
    { name: 'Опора для бруса раскрытая 140*50*76', linkToImage : '33345.png', linkToVideo : 'https://www.youtube.com/embed/UKieuICbfdo', amount : 10, price : 70 },
    { name: 'Опора для бруса закрытая 140*50*76', linkToImage : '35345.png', linkToVideo : 'https://www.youtube.com/embed/COSnUDJ-VF4', amount : 40, price : 70 }
  ]
}