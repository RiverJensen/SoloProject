import React, { useState } from "react";
import axios from "axios";

const dummyFunction = (props) => {
  props.value;
};

const ImgUrlInfo = ({ tie }) => {
  const [sendToUser, setSendToUser] = useState;

  const ChangeUser = async () => {
    const sendTie = await axios.put(`/changeUser/${tie.tieId}`, {
      username: username,
    })
    ;
  };

  const DeleteTie = async () => {
    const removedTies = await axios.delete(`/deleteTie/${tie.tieId}`);
  };
  console.log(tie);
  return (
    <div>
      <div>
        <button onClick={DeleteTie} className="DeleteButton">
          Delete
        </button>
        <img src={tie.imgUrl} />
      </div>

      <div>
        <input placeholder="Username" />
        // <button onClick={ChangeUser } />
        Send
      </div>
    </div>
  );
};

export default ImgUrlInfo;
