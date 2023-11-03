import React, { useState } from 'react'
import NameInfo from './NameInfo'
import UsernameInfo from './UsernameInfo'
import TierInfo from './TierInfo'
import ColorInfo from './ColorInfo'
import LengthInfo from './LengthInfo'
import ImgUrlInfo from './ImgUrlInfo'
import EditButton from './EditButton'
import SaveButton from './SaveButton'


export default function BoxInfo({initialUserData, userId, initialIsEditing}) {
    
    
    const [name, setName] = useState(initialUserData.name)
    const [username, setUsername] = useState(initialUserData.username)
    const [tier, setTier] = useState(initialUserData.tier)
    const [color, setColor] = useState(initialUserData.color)
    const [length, setLength] = useState(initialUserData.length)
    const [imgUrl, setImgUrl] = useState(initialUserData.imgUrl)
    const [editMode, setEditMode] = useState(initialIsEditing)

    const changMode = async () => {
        let bodyObj = {
            userId: globalId,
                name: name,
                username: username,
                tier: tier,
                color: color,
                length: length,
                imgUrl: imgUrl,
            }
            const response = await axios.put(`/editTie/${userId}`,bodyObj)

            if(!response.data.error){
                setEditMode(false)
            } else {
                alert(response.data.error)
            }
    }

    const changeEditMode = () => setEditMode(true)
    

    return (
        <div>
            <NameInfo
                value = {name}
                onValueChange = {setName}
                isEditing = {editMode}
            />

            <UsernameInfo 
                value = {username}
                onValueChange = {setUsername}
                isEditing = {editMode}
            />

            <TierInfo
                value = {tier}
                onValueChange = {setTier}
                isEditing = {editMode}
            />

            <ColorInfo
                value = {color}
                onValueChange = {setColor}
                isEditing = {editMode}
            />

            <LengthInfo
                value = {length}
                onValueChange = {setLength}
                isEditing = {editMode}
            />

            <ImgUrlInfo
                value = {imgUrl}
                onValueChange = {setImgUrl}
                isEditing = {editMode}
            />

            <EditButton 
            isEditing = {editMode}
            editClick = {changeEditMode}
            />

            <SaveButton
                saveClick= {changMode}
                />

        </div>

    )
}


