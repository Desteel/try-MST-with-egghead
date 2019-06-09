import { observer } from 'mobx-react';
import React from 'react';

import TestModel from '../models/Test';

const Select = ({ group, handleChange }) => {
    return (
        <>
            <button
                onClick={() => {
                    console.log(TestModel.name);
                }}
            >
                test log
            </button>
            <select onChange={handleChange}>
                <option>- select user -</option>

                {[...group.users.values()].map(user => (
                    <option key={user.id} value={user.id}>
                        {user.name}
                    </option>
                ))}
            </select>
        </>
    );
};

export default observer(Select);
