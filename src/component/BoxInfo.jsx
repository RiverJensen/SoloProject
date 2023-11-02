import React, { useState } from 'react'


export default function BoxInfo({initalUserData, userId}) {
    const [description, setDescription] = useState(initalUserData.description)
    const [name, setName] = useState(initalUserData.name)
    const [username, setUsername] = useState(initalUserData.username)
    
}

const BoxInfo = () => {
  return (
    <div>BoxInfo</div>
  )
}

export default BoxInfo