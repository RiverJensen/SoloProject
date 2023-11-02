import React, { useState } from 'react'
import Picture from './Picture'
import UserName from './UserName'
import TieTier from './TieTier'
import BoxInfo from './BoxInfo'
import AddButtion from './AddButton'



const UserBoxData = ({initialUserData}) => {
    const [currentData, setCurrentData] = useState(initialUserData)
const boxs = currentData.map((userInfo) => {
    const {userId, name, username, tier, color, length, imgUrl} = userInfo

    return (
      <BoxInfo
      Key = {userId}
      id = {userId}
      initialUserData = {{name, username, tier, color, length, imgUrl}}
      />
    )
})

const addTie = async () =>{

  const response = await axios.post('/addTie',{
  name: 'FakeMike',
    
  username: 'Fake_John123',
  
  tier: 'Silver',

  color: 'blue',

  length: 32,

  imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH_lZziU2ZsWEyWCwnvCqxzElEvskSpJybkEhEth2h3hs39XntcBh5ezZnuoXN2SkpKo4&usqp=CAU'
  ,
})

setCurrentData([...currentData, response.data])


return (
  <div>
   {boxs}

   <AddButton addClick={addTie}/>
  </div>
)
}

}

export default UserBoxData


