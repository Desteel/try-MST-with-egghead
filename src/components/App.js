import React, { Component } from "react";

import WishListView from "./WishListView";

class App extends Component {
    constructor(props) {
        super();

        this.state = {
            selectedUser: null
        };
    }

    onSelectUser = e => {
        this.setState({
            selectedUser: e.target.value
        });
    };

    render() {
        const { group } = this.props;
        const selectedUser = group.users.get(this.state.selectedUser);

        return (
            <>
                <select onChange={this.onSelectUser}>
                    <option>- select user -</option>
                    {[...group.users.values()].map(user => (
                        <option key={user.id} value={user.id}>
                            {user.name}
                        </option>
                    ))}
                </select>
                {selectedUser && (
                    <WishListView wishList={selectedUser.wishList} />
                )}
            </>
        );
    }
}

export default App;
