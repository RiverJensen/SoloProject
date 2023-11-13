import { useEffect, useState } from "react";
import Picture from "./ThingsToAddLatter/Picture";
import UserName from "./UserName";
import TieTier from "./ThingsToAddLatter/TieTier";
import BoxInfo from "./BoxInfo";
import AddButton from "./AddButton";
import axios from "axios";
import LoginPage from "../Login.jsx";
import ImgUrlInfo from "./ImgUrlInfo";
// import { useEffect, useState } from "react";

const UserBoxData = () => {
  console.log("UserBoxData hit");
  const [username, setUsername] = useState(null);
  const [tieData, setTieData] = useState([]);

  console.log(tieData);

  const getUserName = async () => {
    await axios.get("/UserTies").then((res) => {
      if (res.data.username) {
        setUsername(res.data.username);
        setTieData(res.data.userTies);
      } else {
        alert(res.data.message);
      }
    });
  };

  const tieMap = tieData.map((tie) => {
    return <h5>{tie.imgUrl}</h5>;
  });

  useEffect(() => {
    getUserName();
  }, []);

  // const [currentData, setCurrentData] = useState(initialUserData);
  // const boxs = currentData.map((userInfo) => {
  //   const { userId,  username,  } = userInfo;

  //   return (
  //     <BoxInfo
  //       key={userId}
  //       id={userId}
  //       initialUserData={{ username, }}
  //     />
  //   );
  // });

  // const addTie = async () => {
  //   const response = await axios.post("/addTie", {

  //     username: "Fake_mike123",

  //     imgUrl:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH_lZziU2ZsWEyWCwnvCqxzElEvskSpJybkEhEth2h3hs39XntcBh5ezZnuoXN2SkpKo4&usqp=CAU",
  //   });
  //   setCurrentData([...currentData, response.data]);
  // };

  return (
    <div>
      {/* {boxs} */}

      {username && (
        <>
          <h3>{username}</h3>
          <img src={`${tieMap}`} alt="Error" />
          {tieMap}
        </>
      )}

      {!username && <h3>No Username</h3>}

      {/* <AddButton addClick={addTie} /> */}
    </div>
  );
};

export default UserBoxData;
