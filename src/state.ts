import { StateType } from "./ts-types";
import Image1 from './assets/images/sam-chor-36.jpg';
import Image2 from './assets/images/sam-chor-41.jpg';
import Image3 from './assets/images/sam-chor-64.jpg';



export const state: StateType = {
  ugolki: [
    { name: 'Уголок усилённый 50*50*35', linkToImage : '12345.png', linkToVideo : '12345.mp4', amount : 200, price : 9 },
    { name: 'Уголок  60*60*50', linkToImage : '99345.png', linkToVideo : '99345.mp4', amount : 100, price : 13 },
    { name: 'Уголок  98*98*88', linkToImage : '98345.png', linkToVideo : '98345.mp4', amount : 20, price : 42 },
  ],
  samorezi: [
    { name: 'Саморез чёрный 3,5*36', linkToImage : Image1, linkToVideo : 'https://www.youtube.com/embed/-hZ6cJWZu4Y', amount : 2200, price : 0.4 },
    { name: 'Саморез чёрный 3,5*41', linkToImage : Image2, linkToVideo : 'https://www.youtube.com/embed/VnNDrlRJzbs', amount : 1200, price : 0.5 },
    { name: 'Саморез чёрный 4,2*64', linkToImage : Image3, linkToVideo : 'https://www.youtube.com/embed/Y91EVb6C4lg', amount : 800, price : 0.8 },
    
  ],
  others: [
    { name: 'Опора для бруса открытая 140*50*76', linkToImage : '33345.png', linkToVideo : '33345.mp4', amount : 20, price : 70 },
    { name: 'Опора для бруса закрытая 140*50*76', linkToImage : '35345.png', linkToVideo : '35345.mp4', amount : 40, price : 70 }
  ]
}