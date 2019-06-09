import { types } from 'mobx-state-tree';

const TestModel = types
    .model({
        name: types.string
    })
    .actions(self => ({
        change(val) {
            self.name = val;
        }
    }));

export default TestModel.create({
    name: 'test'
});
