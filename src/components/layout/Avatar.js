import React from "react"

const Avatar = ({ className, image }) => {
  return (
    <div
      className={className}
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    />
  )
}

export default Avatar
