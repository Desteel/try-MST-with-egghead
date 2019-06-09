import React, { Component } from 'react';

import WishListView from './WishListView';
import Select from './Select';
import TestModel from '../models/Test';

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

    testChange = () => {
        TestModel.change('1111111');
        console.log(TestModel.name);
    };

    render() {
        const { group } = this.props;
        const selectedUser = group.users.get(this.state.selectedUser);

        console.log(TestModel.name);

        return (
            <>
                <button onClick={this.testChange}>test change</button>
                <button onClick={group.reload}>reload</button>
                <Select group={group} handleChange={this.onSelectUser} />
                {selectedUser && (
                    <>
                        <WishListView wishList={selectedUser.wishList} />
                        <button onClick={selectedUser.getSuggestions}>
                            Suggestions
                        </button>
                        <hr />
                        <h2>
                            {selectedUser.recipient
                                ? selectedUser.recipient.name
                                : ''}
                        </h2>
                    </>
                )}
                {selectedUser && selectedUser.recipient && (
                    <WishListView
                        wishList={selectedUser.recipient.wishList}
                        readonly
                    />
                )}
            </>
        );
    }
}

export default App;
