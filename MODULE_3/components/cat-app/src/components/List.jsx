import React from 'react';
// we COULD pass props here to then interpolate to our li
const List = () => {
    return (
        // the `<>` below is a JSX fragment - it allows us to wrap our 
        // components return value in an element without adding a new dom
        // element
        <>
        
            <li>
                <a href="#">About</a>
            </li>
            <li>
                <a href="#">Contact</a>
            </li>
            <li>
                <a href="#">Legal</a>
            </li>
            <li>
                <a href="#">Jobs</a>
            </li>
        </>
    );
}

export default List;
