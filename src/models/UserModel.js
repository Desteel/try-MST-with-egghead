import { types } from "mobx-state-tree";

import WishListModel from "./WishListModel";

const UserModel = types.model({
    id: types.string,
    name: types.string,
    gender: types.enumeration("gender", ["m", "f"]),
    wishList: types.optional(WishListModel, {})
});

export default UserModel;
