import React, { useState } from 'react'
import Picture from './Picture'
import UserName from './UserName'
import TieTier from './TieTier'
import BoxInfo from './BoxInfo'



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

return (
  <div>
   {boxs}
    test
  </div>
)
}

export default UserBoxData


