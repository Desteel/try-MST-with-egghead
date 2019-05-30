import { types } from "mobx-state-tree";

import UserModel from "./UserModel";

const GroupModel = types.model({
    users: types.map(UserModel)
});

export default GroupModel;
