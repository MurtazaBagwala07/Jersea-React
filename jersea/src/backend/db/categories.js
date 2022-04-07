import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Laliga",
    description:
      "",
    img:"https://imageio.forbes.com/specials-images/imageserve/5fd148842c66ab6967c0b012/Real-Madrid-v-Borussia-Moenchengladbach--Group-B---UEFA-Champions-League/960x0.jpg?fit=bounds&format=jpg&width=960"
  },
  {
    _id: uuid(),
    categoryName: "Serie-A",
    description:
      "",
    img:"https://i.guim.co.uk/img/media/e805c341ab52e97ae29cef48c6d97be955a0b65b/0_105_5568_3341/master/5568.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=a811601440a62c62226e30a86bd30397"
  },
  {
    _id: uuid(),
    categoryName: "Premier League",
    description:
      "",
      img:"https://e0.365dm.com/21/09/1600x900/skysports-ronaldo-united-manchester-united_5497116.jpg?20210901100748"
  },
  {
    _id: uuid(),
    categoryName: "Ligue-1",
    description:
      "",
      img:"https://pbs.twimg.com/media/FPNn7icXsAc_uFH.jpg"
  },
];
