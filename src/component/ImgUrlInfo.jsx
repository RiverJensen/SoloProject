import React, { useState } from "react";
import axios from "axios";
import {Image} from "react-bootstrap";

import { Button } from "react-bootstrap";


const dummyFunction = (props) => {
  props.value;
};

const ImgUrlInfo = ({ tie }) => {
  const [sendToUser, setSendToUser] = useState("");

  const changeUser = async () => {
    const sendTie = await axios.put(`/changeUser/${tie.tieId}`, {
      username: sendToUser,
    });
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

        <Image src={tie.imgUrl} rounded />
      </div>

      <div>
        <input
          placeholder="Username"
          type="text"
          onChange={(e) => setSendToUser(e.target.value)}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            changeUser();
          }}
        >{" "}
        Send
        </button>
      </div>
    </div>
  );
};

export default ImgUrlInfo;
