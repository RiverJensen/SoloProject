import React from 'react'

const UserName = ({ value, onValueChange, isEditing }) => {
  return isEditing ? (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
      />

      <p>test</p>
    </div>
  ) : (
    <div>
      
    </div>
  );
};
export default UserName