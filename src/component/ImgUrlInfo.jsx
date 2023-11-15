

import React from "react";
import axios from "axios";




const dummyFunction = (props) => {
  props.value;
};

const ImgUrlInfo = ({ tie  }) => {

  const DeleteTie = async () => {
    const removedTies = await axios.delete(`/deleteTie/${tie.tieId}`,)
   
  }
  console.log(tie);
  return (
    <div>
      <div>
       <button onClick={DeleteTie}>Delete</button>
      <img src={tie.imgUrl} />
      </div>

      <div>
        <input type="text" placeholder="send to username" />
        <button> Send 
        </button>
      </div>
    </div>
  );
};

export default ImgUrlInfo;
