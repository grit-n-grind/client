import React from "react"
import NavItem from "./NavItem"

const ProfileNav = props => {
  return (
    <div className={"dashboard-nav"}>
      <ul className={"nav"}>
        {props.navItems &&
          props.navItems.map(navItem => {
            return (
              <NavItem
                page={props.page}
                navItem={navItem}
                setPage={props.setPage}
              />
            )
          })}
      </ul>
    </div>
  )
}
export default ProfileNav
