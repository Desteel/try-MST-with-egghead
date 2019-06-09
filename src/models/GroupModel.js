import { types, flow, applySnapshot } from 'mobx-state-tree';

import UserModel from './UserModel';

const GroupModel = types
    .model({
        users: types.map(UserModel)
    })
    .actions(
        self => {
            let controller;

            return {
                afterCreate() {
                    self.load();
                },
                load: flow(function* load() {
                    try {
                        controller = new AbortController();
                        const response = yield window.fetch(
                            'http://localhost:3000/users',
                            {
                                signal: controller.signal
                            }
                        );
                        applySnapshot(self.users, yield response.json());
                        console.log('success');
                        console.log([...self.users.values()]);
                    } catch (e) {
                        console.log('aborted', e.name);
                    }
                }),
                reload() {
                    controller && controller.abort();
                    self.load();
                },
                beforeDestroy() {
                    controller && controller.abort();
                }
            };
        }
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
