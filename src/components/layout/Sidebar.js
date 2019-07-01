import React from "react"

import { useSession } from "../../hooks/useAuth"

const Sidebar = props => {
  return (
    <div className={"sidebar"}>
      {props.children && { ...props.children }}
    </div>
  )
}

export default Sidebar
