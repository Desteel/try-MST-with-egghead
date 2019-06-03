import { types, flow, applySnapshot } from 'mobx-state-tree';

import UserModel from './UserModel';

const GroupModel = types
    .model({
        users: types.map(UserModel)
    })
    .actions(
        self => ({
            afterCreate() {
                self.load();
            },
            load: flow(function* load() {
                const response = yield window.fetch(
                    'http://localhost:3000/users'
                );
                applySnapshot(self.users, yield response.json());
                console.log([...self.users.values()]);
            }),
            reload() {
                self.load();
            }
        })
        // {
        //     let controller;

        //     return {
        //         afterCreate() {
        //             self.load();
        //         },
        //         load: flow(function* load() {
        //             controller = new AbortController();
        //             try {
        //                 const response = yield window.fetch(
        //                     'http://localhost:3000/users',
        //                     {
        //                         signal: controller.signal
        //                     }
        //                 );

        //                 applySnapshot(self.users, yield response.json());
        //                 console.log('success');
        //             } catch (e) {
        //                 console.log('aborted', e.name);
        //             }
        //         }),
        //         reload() {
        //             if (controller) controller.abort();
        //             self.load();
        //         },
        //         beforeDestroy() {
        //             if (controller) controller.abort();
        //         }
        //     };
        // }
    );

export default GroupModel;
