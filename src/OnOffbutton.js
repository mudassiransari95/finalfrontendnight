import React, { useState } from 'react';

const ToggleButton = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div
      className={`w-12 h-5 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
        isOn ? 'bg-blue-500' : 'bg-gray-300'
      }`}
      onClick={toggleSwitch}
    >
      <div
        className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
          isOn ? 'translate-x-7' : 'translate-x-0'
        }`}
      ></div>
    </div>
  );
};

export default ToggleButton;
