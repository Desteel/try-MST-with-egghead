import { types, flow } from "mobx-state-tree";

import WishListModel from "./WishListModel";

const UserModel = types
    .model({
        id: types.string,
        name: types.string,
        gender: types.enumeration("gender", ["m", "f"]),
        wishList: types.optional(WishListModel, {})
    })
    .actions(self => ({
        async getSuggestions() {
            // window
            //     .fetch(`http://localhost:3000/suggestions_${self.gender}`)
            //     .then(response => response.json())
            //     .then(suggestions => {
            //         self.addSuggestions(suggestions);
            //     });

            const response = await window.fetch(
                `http://localhost:3000/suggestions_${self.gender}`
            );
            const suggestions = await response.json();
            self.addSuggestions(suggestions);
        },
        addSuggestions(suggestions) {
            self.wishList.items = [...self.wishList.items, ...suggestions];
        }
    }));

export default UserModel;
