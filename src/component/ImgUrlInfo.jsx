import React from "react";

const dummyFunction = (props) => {
  props.value;
};

const ImgUrlInfo = ({ tie,TieDelete  }) => {
  console.log(tie);
  return (
    <div>
      <button onClick={TieDelete}>Delete</button>
      <img src={tie.imgUrl} />
    </div>
  );
};

export default ImgUrlInfo;
