import GroupModel from '../models/GroupModel';

const initialState = {
    users: {
        a1: {
            id: 'a1',
            name: 'Homer',
            gender: 'm',
            recipient: 'a4'
        },
        a2: {
            id: 'a2',
            name: 'Marge',
            gender: 'f',
            recipient: 'a1'
        },
        a3: {
            id: 'a3',
            name: 'Bart',
            gender: 'm',
            recipient: 'a2'
        },
        a4: {
            id: 'a4',
            name: 'Lisa',
            gender: 'f',
            recipient: 'a3'
        }
    }
};

export const groupStore = GroupModel.create(initialState);
