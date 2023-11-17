import React from "react";

const UserName = ({ value, onValueChange, isEditing }) => {
  return isEditing ? (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
      />
    </div>
  ) : (
    <div></div>
  );
};
export default UserName;
