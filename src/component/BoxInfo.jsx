import React, { useState } from "react";
import UsernameInfo from "./ThingsToAddLatter/UsernameInfo";
import ImgUrlInfo from "./ImgUrlInfo";
import axios from "axios";
import EditButton from "./EditButton";
import SaveButton from "./SaveButton";
import { useEffect } from "react";


export default function BoxInfo({ initialUserData, id }) {
  const [username, setUsername] = useState(initialUserData.username);
  const [tieData, setTieData] = useState([]);
 
 

  const serverCall = async () => {
    const response = await axios.get(`/TieByUser/${id}`);
    setTieData(response.data);
    console.log(response.data)
  };

  // tieData = [{}, {}, {}] <- each obj. is a tie

    const tiePicture = tieData.map((tie) => {
        return (
            <ImgUrlInfo
                value={tie}
                onValueChange={setTieData}
            />
        )
    })


  useEffect(() => {
    serverCall();
  }, []);



  function LoginState() {
    
  }
  

  return (
    <div>
      <UsernameInfo
        value={username}
        onValueChange={setUsername}
        
      />

      {tiePicture}
      
      
    </div>
  );
}



