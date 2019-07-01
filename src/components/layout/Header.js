import React from "react"
import headerImage from "../../assets/images/user-header-img.png"

import { useSession } from "../../hooks/useAuth"

const Header = () => {
  const {
    user: { firstName, lastName, city, state },
  } = useSession()
  return (
    <div className={"dashboard_header"}>
      <img className={"dashboard_header-img"} src={headerImage} />
      <h1
        className={
          "dashboard_header-user-name"
        }>{`${firstName} ${lastName}`}</h1>
      <h3 className={"dashboard_header-city"}>{`${city}, ${state}`}</h3>
      <i className="fas fa-trophy" />
    </div>
  )
}

export default Header
