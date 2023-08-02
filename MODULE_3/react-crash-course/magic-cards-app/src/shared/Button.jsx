import React from 'react';

const Button = (props) => {
    const { styles, onClick, children } = props;
    
    return (
        <div>
            <button  onClick={ onClick } style = {styles} >
                { children }
            </button>
        </div>
    );
}

export default Button;
