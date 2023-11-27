import React, { useState } from "react";
import { Button } from "react-bootstrap";

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
        <Button
        size="lg"
        variant="primary"
          onClick={(e) => {
            e.preventDefault();
            addClick(urlChange);
          }}
        >
          Add a Tie
        </Button>

      </form>
    </div>
  );
};

export default AddButton;
