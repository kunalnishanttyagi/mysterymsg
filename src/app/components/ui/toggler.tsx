import React, { useState } from "react";

interface ToggleSwitchProps {
  isOn: boolean;
  onToggle: () => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ isOn, onToggle }) => {
  return (
    <div
      className={`w-16 h-8 flex items-center rounded-full p-1 cursor-pointer transition duration-300 ${
        isOn ? "bg-green-500" : "bg-gray-400"
      }`}
      onClick={onToggle}
    >
      <div
        className={`w-6 h-6 bg-white rounded-full shadow-md transform transition duration-300 ${
          isOn ? "translate-x-8" : "translate-x-0"
        }`}
      ></div>
    </div>
  );
};

export default ToggleSwitch;
