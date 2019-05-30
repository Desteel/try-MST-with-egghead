import WishListModel from "../models/WishListModel.js";

const initialState = {
  items: [
    {
      name: "Test Name AAA",
      price: 28.54,
      image: "https://mir-kubikov.ru/promo/starwars20years/images/per-3.png?8"
    },
    {
      name: "Test Name BBB",
      price: 65.54,
      image: "https://mir-kubikov.ru/promo/starwars20years/images/per-2.png?8"
    },
    {
      name: "Test Name CCC",
      price: 65.54,
      image: "https://mir-kubikov.ru/promo/starwars20years/images/per-5.png?8"
    }
  ]
};

export const wishListStore = WishListModel.create(initialState);
