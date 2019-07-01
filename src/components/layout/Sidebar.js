import React from "react"
import Avatar from "./Avatar"

import { useSession } from "../../hooks/useAuth"

const Sidebar = () => {
  const {
    auth: { photoURL },
  } = useSession()
  return (
    <div className={"sidebar"}>
      <Avatar />
    </div>
  )
}

export default Sidebar
