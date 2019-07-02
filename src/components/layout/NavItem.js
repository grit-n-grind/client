import React from "react"

const NavItem = ( { navItem, page, setPage } ) => {
  
  if( navItem.enabled ){
    return ( <li
      className={ page === navItem.name ? "nav-item active" : "nav-item" }
      onClick={ () => setPage( navItem.name ) }
    >
      <span className="nav-item-text">{ navItem.name }</span>
    </li> )
  }
  return ( <li
    className={ page === navItem.name ? "nav-item active" : "nav-item" }
    onClick={ () => setPage( navItem.name ) }
  >
    <span className="nav-item-text">{ navItem.name }</span>{ " " }
    <span className="coming_soon">COMING SOON</span>
  
  </li> )
  
}

export default NavItem