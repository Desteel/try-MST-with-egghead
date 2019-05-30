import { types, getParent } from "mobx-state-tree";

const WishListItemModel = types
    .model({
        name: types.string,
        price: types.number,
        image: types.optional(types.string, "")
    })
    .actions(self => ({
        changeValue(name, newValue) {
            self[name] = newValue;
        },
        remove() {
            getParent(self, 2).remove(self);
        }
    }));

export default WishListItemModel;
