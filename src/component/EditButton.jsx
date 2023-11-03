import React from "react";

const EditButton = ({ isEditing, editClick, saveClick }) => {
  return isEditing ? (
    <div>
      EditButton
      <button onClick={saveClick}>Save</button>
    </div>
  ) : (
    <div>
      <button onClick={editClick}>EditButton</button>
    </div>
  );
};

export default EditButton;
