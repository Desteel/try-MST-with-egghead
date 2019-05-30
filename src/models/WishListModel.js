import { types, destroy } from "mobx-state-tree";
import WishListItemModel from "./WishListItemModel";

const WishListModel = types
    .model({
        items: types.optional(types.array(WishListItemModel), [])
    })
    .actions(self => ({
        add(item) {
            self.items = [...self.items, item];
        },
        remove(item) {
            destroy(item);
        }
    }))
    .views(self => ({
        get totalPrice() {
            return self.items.reduce((sum, entry) => sum + entry.price, 0);
        }
    }));

export default WishListModel;
