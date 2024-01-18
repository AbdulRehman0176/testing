import React, { useState } from 'react';

function Zee() {
  // State to store items
  const [items, setItems] = useState([]);
  // State to toggle display of items
  const [displayItems, setDisplayItems] = useState(false);
  // State to store the current input value
  const [inputValue, setInputValue] = useState('');

  // Function to handle input change
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Function to add items to the array
  const addItem = () => {
    setItems([...items, inputValue]);
    setInputValue(''); // Clear the input field after adding an item
  };

  // Function to toggle the display of items
  const toggleDisplay = () => {
    setDisplayItems(!displayItems);
  };

  return (
    <div>
      <h2>Array Operations in React</h2>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter item"
      />
      <button onClick={addItem}>Add</button>
      <button onClick={toggleDisplay}>
        {displayItems ? 'Hide Items' : 'Display Items'}
      </button>
      {displayItems && (
        <div>
          <h3>Items:</h3>
          <ul>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Zee