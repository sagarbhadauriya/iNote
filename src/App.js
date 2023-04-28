import React, { useState, memo } from 'react';
import PropTypes from 'prop-types';

// Single List Item
const WrappedSingleListItem = ({
  isSelected,
  onClickHandler,
  text,
}) => {
  return (
    <li
      style={{ backgroundColor: isSelected ? 'green' : 'red' }}
      onClick={onClickHandler}
    >
      {text}
    </li>
  );
};

WrappedSingleListItem.propTypes = {
  isSelected: PropTypes.bool,
  onClickHandler: PropTypes.func,
  text: PropTypes.string.isRequired,
};

const SingleListItem = memo(WrappedSingleListItem);

// List Component
const WrappedListComponent = ({
  items,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleClick = index => {
    setSelectedIndex(index);
  };

  return (
    <ul style={{ textAlign: 'left' }}>
      {items.map((item) => (
        <SingleListItem
          key={item.itemId}
          onClickHandler={() => handleClick(item.itemId)}
          text={item.text}
          isSelected={selectedIndex === item.itemId}
        />
      ))}
    </ul>
  );
};

WrappedListComponent.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      itemId: PropTypes.number.isRequired
    }),
  ),
};

WrappedListComponent.defaultProps = {
  items: [
    { text: 'List 1', itemId: 1},
    { text: 'List 2', itemId: 2},
    { text: 'List 3', itemId: 3},
    { text: 'List 4', itemId: 4},
    { text: 'List 5', itemId: 5},
  ],
};

const List = memo(WrappedListComponent);

export default List;
