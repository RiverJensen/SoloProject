import React, { useState } from 'react'
import NameInfo from './NameInfo'
import UsernameInfo from './UsernameInfo'
import TierInfo from './TierInfo'
import ColorInfo from './ColorInfo'
import LengthInfo from './LengthInfo'
import ImgUrlInfo from './ImgUrlInfo'


export default function BoxInfo({initialUserData, userId}) {
    console.log(initialUserData)
    
    const [name, setName] = useState(initialUserData.name)
    const [username, setUsername] = useState(initialUserData.username)
    const [tier, setTier] = useState(initialUserData.tier)
    const [color, setColor] = useState(initialUserData.color)
    const [length, setLength] = useState(initialUserData.length)
    const [imgUrl, setImgUrl] = useState(initialUserData.imgUrl)

    

    return (
        <div>
            <NameInfo
                value = {name}
                onValueChange = {setName}
            />

            <UsernameInfo 
                value = {username}
                onValueChange = {setUsername}
            />

            <TierInfo
                value = {tier}
                onValueChange = {setTier}
            />

            <ColorInfo
                value = {color}
                onValueChange = {setColor}
            />

            <LengthInfo
                value = {length}
                onValueChange = {setLength}
            />

            <ImgUrlInfo
                value = {imgUrl}
                onValueChange = {setImgUrl}
            />

        </div>

    )
}


