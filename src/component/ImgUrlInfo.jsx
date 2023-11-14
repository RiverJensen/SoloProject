import React from "react";

const dummyFunction = (props) => {
  props.value;
};

const ImgUrlInfo = ({ tie }) => {
  console.log(tie);
  return (
    <div>
      <button>Delete</button>
      <img src={tie.imgUrl} />
    </div>
  );
};

export default ImgUrlInfo;
