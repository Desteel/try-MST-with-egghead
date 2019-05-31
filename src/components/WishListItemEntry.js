import React, { Component } from "react";
import { observer } from "mobx-react";

import WishListItemModel from "../models/WishListItemModel";

import WishListItemEdit from "./WishListItemEdit";

const entryData = {
    name: "",
    price: 0
};

class WishListItemEntry extends Component {
    constructor() {
        super();

        this.state = {
            entry: WishListItemModel.create(entryData)
        };
    }

    onAdd = () => {
        this.props.wishList.add(this.state.entry);
        this.setState({
            entry: WishListItemModel.create(entryData)
        });
    };

    render() {
        return (
            <>
                <WishListItemEdit item={this.state.entry} />
                <button onClick={this.onAdd}>Add</button>
            </>
        );
    }
}

export default observer(WishListItemEntry);
