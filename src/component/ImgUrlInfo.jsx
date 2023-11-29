import React, { useState } from "react";
import axios from "axios";
import { Image } from "react-bootstrap";

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
      <div style={{ bottom: 300 }} className="border">
        <div>
          <Image
            className="img-thumbnail"
            src={tie.imgUrl}
            alt="Tie Imgae Here"
            style={{ width: 200, height: 300 }}
          />
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
          >
            {" "}
            Send
          </button>
          <button onClick={DeleteTie} className="DeleteButton">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImgUrlInfo;
