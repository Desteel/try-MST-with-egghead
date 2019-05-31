import GroupModel from '../models/GroupModel';

const initialState = {
    users: {
        a1: {
            id: 'a1',
            name: 'Homer',
            gender: 'm'
        },
        a2: {
            id: 'a2',
            name: 'Marge',
            gender: 'f'
        },
        a3: {
            id: 'a3',
            name: 'Bart',
            gender: 'm'
        },
        a4: {
            id: 'a4',
            name: 'Lisa',
            gender: 'f'
        }
    }
};

export const groupStore = GroupModel.create(initialState);
