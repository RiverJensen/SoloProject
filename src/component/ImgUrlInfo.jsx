import React from 'react'

const dummyFunction = (props) => {
    props.value
}


const ImgUrlInfo = ({value}) => {
    console.log(value)
  return (
    <div>]

        <img src= {value} />
    </div>
  )
}

export default ImgUrlInfo