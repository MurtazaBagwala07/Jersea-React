import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    name: "Real Madrid 2021-22",
    image:'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/80157fee42e04a3b94e1ace601190dec_9366/real-madrid-21-22-home-jersey.jpg',
    price: 5000,
    rating: 4.9,
    categoryName: "Laliga",
    inStock: true,
    fastDelivery: true,
  },
  {
    _id: uuid(),
    name: "Arsenal 2021-22",
    image:'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/12618380/2020/11/3/082522a5-d715-4663-a95c-e295fea0e0e31604381520354-ADIDAS-Men-Tshirts-3401604381519082-1.jpg',
    price: 4000,
    rating: 4.1,
    categoryName: "Premier League",
    inStock: true,
    fastDelivery: false,
  },
  {
    _id: uuid(),
    name: "Inter Milan 2021-22",
    image:'https://store.inter.it/images/inter/products/small/IN21A01.webp',
    price: 3800,
    rating: 4.3,
    categoryName: "Serie-A",
    inStock: false,
    fastDelivery: true,
  },
  {
    _id: uuid(),
    name: "Barcelona 2021-22",
    image:'https://pbs.twimg.com/media/E-1FuGuVEAQn_H-.jpg',
    price: 5000,
    rating: 4.6,
    categoryName: "Laliga",
    inStock: false,
    fastDelivery: false,
  },
  {
    _id: uuid(),
    name: "Liverpool 2021-22",
    image:'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13132444/2020/12/9/67cc330a-c1ad-498f-8639-11a97d8b45701607505912727-LFC-M-NK-BRT-STAD-JSY-SS-HM-8401607505910900-1.jpg',
    price: 5000,
    rating: 4.8,
    categoryName: "Premier League",
    inStock: true,
    fastDelivery: true,
  },
  {
    _id: uuid(),
    name: "Manchester City 2021-22",
    image:'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/16027656/2021/11/8/6cf24812-08b2-4813-bf0a-da33601286141636378209215Puma1.jpg',
    price: 2400,
    rating: 3.9,
    categoryName: "Premier League",
    inStock: true,
    fastDelivery: true,
  },
  {
    _id: uuid(),
    name: "Chelsea 2021-22",
    image:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d59713de-b2e8-43b9-b282-d97c305cd8ad/chelsea-fc-2021-22-stadium-away-football-shirt-VBWj8H.png',
    price: 4200,
    rating: 3.3,
    categoryName: "Premier League",
    inStock: true,
    fastDelivery: true,
  },
  {
    _id: uuid(),
    name: "Juventus 2021-22",
    image:'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/12618314/2020/11/3/e09209d2-6a6e-4104-a784-edb5b98e4bd11604397428965-ADIDAS-Men-Tshirts-2391604397427451-1.jpg',
    price: 2000,
    rating: 4.4,
    categoryName: "Serie-A",
    inStock: true,
    fastDelivery: false,
  },
  {
    _id: uuid(),
    name: "PSG 2021-22",
    image:'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14274496/2021/5/28/03d91875-0dd9-4a59-b4dc-a0280d7517451622191148129ParisSaint-Germain202122StadiumHomeMensSoccerJersey1.jpg',
    price: 1000,
    rating: 2.9,
    categoryName: "Ligue-1",
    inStock: true,
    fastDelivery: true,
  },
  {
    _id: uuid(),
    name: "Monaco 2021-22",
    image:'https://shop.asmonaco.com/3732-home_default/21-22-home-match-shirt.jpg',
    price: 2000,
    rating: 4.5,
    categoryName: "Ligue-1",
    inStock: true,
    fastDelivery: true,
  },
  
  
];
