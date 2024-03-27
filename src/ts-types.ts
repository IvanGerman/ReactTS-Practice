export type ItemDescriptionType = {
  name: string
  linkToImage: string
  linkToVideo: string
  amount: number
  amountKG: number
  price: number
  priceKG: number
  numberInKG: number
};

export type StateType = {
  ugolki: Array<ItemDescriptionType>
  samorezi: Array<ItemDescriptionType>
  others: Array<ItemDescriptionType>
};

