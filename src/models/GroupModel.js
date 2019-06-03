import { types, flow, applySnapshot } from 'mobx-state-tree';

import UserModel from './UserModel';

const GroupModel = types
    .model({
        users: types.map(UserModel)
    })
    .actions(self => ({
        afterCreate() {
            self.load();
        },
        load: flow(function* load() {
            const response = yield window.fetch('http://localhost:3000/users');
            applySnapshot(self.users, yield response.json());
        })
    }));

export default GroupModel;
