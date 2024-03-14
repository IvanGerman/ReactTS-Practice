export type ItemDescriptionType = {
  name: string
  linkToImage: string
  linkToVideo: string
  amount: number
  price: number
};

export type StateType = {
  ugolki: Array<ItemDescriptionType>
  samorezi: Array<ItemDescriptionType>
  others: Array<ItemDescriptionType>
};

