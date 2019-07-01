import React from "react";
import headerImage from "../../assets/images/user-header-img.png";

const Header = () => {
    return ( <div className={ "dashboard_header" }>
        <img className={ "dashboard_header-img" } src={ headerImage }/>
        <h1 className={ "dashboard_header-user-name" }>Name Placeholder</h1>
        <h3 className={ "dashboard_header-city" }>City Name</h3>
        <i className="fas fa-trophy"></i>
    </div> );
};

export default Header;
