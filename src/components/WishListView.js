import React from "react";
import { observer } from "mobx-react";

import WishListItemView from "./WishListItemView";
import WishListItemEntry from "./WishListItemEntry";

const WishListView = ({ wishList }) => {
  return (
    <div className="list">
      <WishListItemEntry wishList={wishList} />
      <ul>
        {wishList.items.map((item, idx) => (
          <WishListItemView key={idx} item={item} />
        ))}
      </ul>
      <div className="total">Total: {wishList.totalPrice}</div>
    </div>
  );
};

export default observer(WishListView);
