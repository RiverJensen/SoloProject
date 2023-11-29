import { useEffect, useState } from "react";
import axios from "axios";
import AddButton from "./AddButton";
import ImgUrlInfo from "./ImgUrlInfo";

const UserBoxData = () => {
  console.log("UserBoxData hit");
  const [username, setUsername] = useState(null);
  const [tieData, setTieData] = useState([]);
  const [userId, setUserId] = useState(null);
  const [tieId, setTieId] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);
  console.log(tieData);

  const getUserName = async () => {
    await axios.get("/UserTies").then((res) => {
      if (res.data.username) {
        setUsername(res.data.username);
        setTieData(res.data.userTies);
        setUserId(res.data.userId);
      } else {
        alert(res.data.message);
      }
    });
  };

  const addTie = async (imgUrl) => {
    const addTieResponse = await axios.post("/addTie", {
      userId: userId,
      imgUrl: imgUrl,
    });
    setTieData([...tieData, addTieResponse.data.tie]);
  };

  const tieMap = tieData.map((tie) => {
    return <ImgUrlInfo tie={tie} />;
  });

  useEffect(() => {
    getUserName();
  }, []);

  return (
    <div className = "container" style= {{ position : "absolute", bottom: 550, display:"flex"}}>
    <div className = "row" style = {{ bottom: 300, display: "flex", justifyContent: "center"}}>

      <div className = "col" style={{bottom: 300, display: "flex", justifyContent: "center"}}>
      {username && (
        <>
          <h1 style ={{ color: "white", position : "absolute", bottom: 450}}>{username}</h1>

          {tieMap}
        </>
      )}

      {!username && <h3>No Username</h3>}

      
      </div>
    </div>
      <AddButton  addClick={addTie} style={{position:"absolute", justifyContent:"center",bottom:300}}/>
    </div>
  );
};


export default UserBoxData;
