import React from "react";

const ColorInfo = ({ value, onValueChange, isEditing }) => {
  return isEditing ? (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
      />
    </div>
  ) : (
    <div>
      <p>{value}</p>
    </div>
  );
};

export default ColorInfo;
