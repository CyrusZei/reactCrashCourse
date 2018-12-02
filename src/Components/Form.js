import React from 'react';

const Form = ({
  handleInputValue,
  handleAddItemClick,
  handleUpdateItemClick,
  stateData
}) => {
  return (
    <div>
      <input
        type="text"
        value={stateData.itemValue}
        onChange={e => handleInputValue(e, 'itemValue')}
      />
      <button onClick={handleAddItemClick}>add item</button>

      <hr />
      <h3>Edit</h3>
      <input
        type="text"
        value={stateData.itemEdit}
        onChange={e => handleInputValue(e, 'itemEdit')}
      />
      <button onClick={handleUpdateItemClick}>Update</button>
    </div>
  );
};
export default Form;
