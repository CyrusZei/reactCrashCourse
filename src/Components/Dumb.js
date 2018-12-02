import React from 'react';

const Dumb = ({ listItemData, removeItem, editItem }) => {
  return (
    <ul>
      {listItemData.map((item, index) => {
        return (
          <li key={index}>
            {item}
            <button onClick={() => editItem(index)}>Edit</button>
            <button onClick={() => removeItem(index)}>remove</button>
          </li>
        );
      })}
    </ul>
  );
};

export default Dumb;
