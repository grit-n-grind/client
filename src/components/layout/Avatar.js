import React from "react";

const Avatar = props => {
    return <div className={ props.className }>
        <img className={'avatar_image'}
            src={ "https://lh3.googleusercontent.com/-uQX3WtQRqmA/AAAAAAAAAAI/AAAAAAAAAIY/xKnec7XI1pI/photo.jpg" }/>
    </div>;
};

export default Avatar;
