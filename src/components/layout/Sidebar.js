import React from "react"

import { useSession } from "../../hooks/useAuth"

const Sidebar = props => {
  let childComponents = props.children
  if( props.children && props.children.label > 1 ){
    childComponents = [ ...props.children ]
  }
  return ( <div className={ "sidebar" }>
    { props.children && childComponents }
  </div> )
}

export default Sidebar
