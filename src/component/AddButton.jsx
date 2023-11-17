import React, { useState } from "react";

const AddButton = ({ addClick }) => {
  const [urlChange, setUrlChange] = useState("");
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Add Image Url Here."
          onChange={(e) => setUrlChange(e.target.value)}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            addClick(urlChange);
          }}
        >
          Add a Tie
        </button>
        
      </form>
    </div>
  );
};

export default AddButton;
