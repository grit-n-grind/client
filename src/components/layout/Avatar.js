import React from "react"

const Avatar = ({ className, image }) => {
  return (
    <div className={className}>
      <img className={"avatar_image"} src={image} />
    </div>
  )
}

export default Avatar
