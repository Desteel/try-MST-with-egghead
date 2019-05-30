import React, { Component } from "react";
import { observer } from "mobx-react";
import { clone, getSnapshot, applySnapshot } from "mobx-state-tree";

import WishListItemEdit from "./WishListItemEdit";

class WishListItemView extends Component {
    constructor() {
        super();

        this.state = {
            isEditing: false,
            clone: null
        };
    }

    onToggleEdit = () => {
        this.setState({
            isEditing: true,
            clone: clone(this.props.item)
        });
    };

    onCancelEdit = () => {
        this.setState({
            isEditing: false
        });
    };

    onSaveEdit = () => {
        applySnapshot(this.props.item, getSnapshot(this.state.clone));
        this.setState({
            isEditing: false,
            clone: null
        });
    };

    renderStatic() {
        const { item } = this.props;

        return (
            <li className="item">
                {item.image && <img src={item.image} alt="" />}
                <div>
                    <h3>{item.name}</h3>
                    <span>{item.price}</span>
                    <br />
                    <button onClick={this.onToggleEdit}>Edit</button>
                    <button onClick={item.remove}>Delete</button>
                </div>
            </li>
        );
    }

    renderEditable = () => (
        <li className="item">
            <WishListItemEdit item={this.state.clone} />
            <button onClick={this.onSaveEdit}>Save</button>
            <button onClick={this.onCancelEdit}>Cancel</button>
        </li>
    );

    render() {
        return this.state.isEditing
            ? this.renderEditable()
            : this.renderStatic();
    }
}

export default observer(WishListItemView);
