import React from "react";
import headerGym from "../../assets/images/GymHeader.jpg";

const HeaderGym = () => {
    return ( <div className={ "dashboard_header" }>
        <img className={ "dashboard_header-img" } src={ headerGym }/>
        <h1 className={ "dashboard_header-user-name" }>Name Placeholder</h1>
        <h3 className={ "dashboard_header-city" }>City Name</h3>
        <i className="fas fa-trophy"></i>
    </div> );
};

export default HeaderGym;