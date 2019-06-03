import GroupModel from '../models/GroupModel';

const initialState = {
    users: {}
};

export const groupStore = GroupModel.create(initialState);
