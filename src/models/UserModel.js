import { types, flow, getSnapshot } from 'mobx-state-tree';

import WishListModel from './WishListModel';

const UserModel = types
    .model({
        id: types.identifier,
        name: types.string,
        gender: types.enumeration('gender', ['m', 'f']),
        wishList: types.optional(WishListModel, {}),
        recipient: types.maybe(types.reference(types.late(() => UserModel)))
    })
    .actions(self => ({
        getSuggestions: flow(function*() {
            const response = yield window.fetch(
                `http://localhost:3000/${self.id}`
            );
            const suggestions = yield response.json();
            self.wishList.items = [...self.wishList.items, ...suggestions];
        }),
        save: flow(function* save() {
            try {
                yield window.fetch(`http://localhost:3000/users/${self.id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(getSnapshot(self))
                });
            } catch (e) {
                console.error(e);
            }
        })
    }));

export default UserModel;
