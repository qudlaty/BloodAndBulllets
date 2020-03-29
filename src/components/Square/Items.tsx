import React from "react";
import { Item, Entity } from "../../services/EntitiesValues";

interface ItemsProps {
  items: Item[];
}

class Items extends React.Component<ItemsProps> {
  render() {
    let { items } = this.props;
    let itemsNumber: number = null;
    let itemsIcons = [];

    if (items && items.length) {
      itemsNumber = this.props.items.length;

      items.forEach((item) => {
        let entity = item as Entity;
        if (entity.icon) {
          itemsIcons.push(entity.icon);
        }
      });
    }
    return (
      <div className="square__items">
        <div className="square__items-icons">{itemsIcons}</div>
        <div className="square__items-number">{itemsNumber}</div>
      </div>
    );
  }
}

export default Items;
