import { StateType } from "./ts-types";
import Image1 from './assets/images/sam-chor-36.jpg';
import Image2 from './assets/images/sam-chor-41.jpg';
import Image3 from './assets/images/sam-chor-64.jpg';



export const state: StateType = {
  ugolki: [
    { name: 'Уголок усилённый 50*50*35 мм', linkToImage : '12345.png', linkToVideo : 'https://www.youtube.com/embed/UceGBqwYDyQ', amount : 200, amountKG: 3, price : 9, priceKG : 270, numberInKG : 595 },
    { name: 'Уголок  60*60*50 мм', linkToImage : '99345.png', linkToVideo : 'https://www.youtube.com/embed/r3tZ-x1AFSw', amount : 100, amountKG: 3, price : 13, priceKG : 270, numberInKG : 595 },
    { name: 'Уголок усилённый 98*98*88 мм', linkToImage : '98345.png', linkToVideo : 'https://www.youtube.com/embed/QlC0U_ASDC0', amount : 20, amountKG: 3, price : 42, priceKG : 270 , numberInKG : 595},
  ],
  samorezi: [
    { name: 'Саморез чёрный 3,5*36 мм', linkToImage : Image1, linkToVideo : 'https://www.youtube.com/embed/-hZ6cJWZu4Y', amount : 1785, amountKG : 3, price : 50, priceKG : 270, numberInKG : 595 },
    { name: 'Саморез чёрный 3,5*41 мм', linkToImage : Image2, linkToVideo : 'https://www.youtube.com/embed/H-_RIa4RzLA', amount : 1575, amountKG: 3.5, price : 60, priceKG : 270, numberInKG : 450 },
    { name: 'Саморез чёрный 4*64 мм', linkToImage : Image3, linkToVideo : 'https://www.youtube.com/embed/Y91EVb6C4lg', amount : 776, amountKG: 2, price : 70, priceKG : 270, numberInKG : 388 },
    { name: 'Саморез чёрный 4,5*70 мм', linkToImage : Image3, linkToVideo : 'https://www.youtube.com/embed/w6wwp1DvTT0', amount : 400, amountKG: 2, price : 150, priceKG : 300, numberInKG : 200 },
    { name: 'Саморез оцинкованный 5*50 мм', linkToImage : Image3, linkToVideo : 'https://www.youtube.com/embed/9Rlzjtb6hj4', amount : 735, amountKG: 2.5, price : 120, priceKG : 350, numberInKG : 295 },
    { name: 'Саморез оцинкованный 4*70 мм', linkToImage : Image3, linkToVideo : 'https://www.youtube.com/embed/KYx0XOTjmJM', amount : 340, amountKG: 1, price : 100, priceKG : 350, numberInKG : 345 },
    { name: 'Саморез оцинкованный 4,2*76 мм', linkToImage : Image3, linkToVideo : 'https://www.youtube.com/embed/hwiUdGWaI3M', amount : 260, amountKG: 1.4, price : 190, priceKG : 350, numberInKG : 185 },
    { name: 'Саморез оцинкованный 6*160 мм', linkToImage : Image3, linkToVideo : 'https://www.youtube.com/embed/evfHIqGOkUw', amount : 40, amountKG: 0.63, price : 555, priceKG : 350, numberInKG : 63 },
    
  ],
  others: [
    { name: 'Опора для бруса раскрытая 140*50*76', linkToImage : '33345.png', linkToVideo : 'https://www.youtube.com/embed/UKieuICbfdo', amount : 10, amountKG: 3, price : 70, priceKG : 270, numberInKG : 595 },
    { name: 'Опора для бруса закрытая 140*50*76', linkToImage : '35345.png', linkToVideo : 'https://www.youtube.com/embed/COSnUDJ-VF4', amount : 40, amountKG: 3, price : 70, priceKG : 270, numberInKG : 595 }
  ]
}