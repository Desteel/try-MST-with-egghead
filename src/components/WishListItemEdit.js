import React, { Component } from "react";
import { observer } from "mobx-react";

class WishListItemEdit extends Component {
    onChange = e => {
        let { name, value } = e.target;

        if (name === "price") {
            const price = parseInt(value, 10);
            !isNaN(price) && this.props.item.changeValue(name, price);
        }

        this.props.item.changeValue(name, value);
    };

    render() {
        const { item } = this.props;

        return (
            <div className="item-edit">
                Thing:
                <input value={item.name} onChange={this.onChange} name="name" />
                <br />
                Price:
                <input
                    value={item.price}
                    onChange={this.onChange}
                    name="price"
                />
                <br />
                Image:
                <input
                    value={item.image}
                    onChange={this.onChange}
                    name="image"
                />
                <br />
            </div>
        );
    }
}

export default observer(WishListItemEdit);
