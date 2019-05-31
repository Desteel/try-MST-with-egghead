import React, { Component } from "react";

import WishListView from "./WishListView";
import Select from "./Select";

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
                <Select group={group} handleChange={this.onSelectUser} />
                {selectedUser && (
                    <WishListView wishList={selectedUser.wishList} />
                )}
                {selectedUser && (
                    <button onClick={selectedUser.getSuggestions}>
                        Suggestions
                    </button>
                )}
            </>
        );
    }
}

export default App;
