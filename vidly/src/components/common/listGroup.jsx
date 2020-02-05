import React from 'react';

const ListGroup = (props) => {
    const { items ,textProperty, valueProperty, selectedItem, onItemSelect } = props;
    return (
        <div>
            <ul className="list-group">
                {items.map(item => (
                    <li key={item[valueProperty]}
                        className={
                            selectedItem === item ? "list-group-item active" : "list-group-item"
                        }
                        style={{cursor: "pointer"}}
                        onClick={() => onItemSelect(item)}
                    >
                        {item[textProperty]}
                    </li>
                ))}
            </ul>
        </div>
    );
};

ListGroup.defaultProps = {
    textProperty: "name",
    valueProperty: "_id",
};
export default ListGroup;