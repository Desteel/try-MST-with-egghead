import React from 'react';

const Select = ({ group, handleChange }) => {
    console.log([...group.users.values()]);
    return (
        <select onChange={handleChange}>
            <option>- select user -</option>

            {[...group.users.values()].map(user => (
                <option key={user.id} value={user.id}>
                    {user.name}
                </option>
            ))}
        </select>
    );
};

export default Select;
