import { useState } from "react";
import Picture from "./ThingsToAddLatter/Picture";
import UserName from "./UserName";
import TieTier from "./ThingsToAddLatter/TieTier";
import BoxInfo from "./BoxInfo";
import AddButton from "./AddButton";
import axios from "axios";

const UserBoxData = ({ initialUserData }) => {
  console.log("UserBoxData hit");
  const [currentData, setCurrentData] = useState(initialUserData);
  const boxs = currentData.map((userInfo) => {
    const { userId, name, username, tier, color, length, imgUrl } = userInfo;


    return (
      <BoxInfo
        key={userId}
        id={userId}
        initialUserData={{ name, username, tier, color, length, imgUrl }}
      />
    );
  });


  

  const addTie = async () => {
    const response = await axios.post("/addTie", {
      name: "FakeMike",

      username: "Fake_mike123",

      tier: "Silver",

      color: "blue",

      length: 32,

      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH_lZziU2ZsWEyWCwnvCqxzElEvskSpJybkEhEth2h3hs39XntcBh5ezZnuoXN2SkpKo4&usqp=CAU",
    });
    setCurrentData([...currentData, response.data]);
  };

  return (
    <div>
      {boxs}
      {/* <AddButton addClick={addTie} /> */}
    </div>
  );
};

export default UserBoxData;
