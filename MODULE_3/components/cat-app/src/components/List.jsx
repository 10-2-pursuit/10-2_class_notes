import React from 'react';
// we COULD pass props here to then interpolate to our li
const List = () => {
    return (
        // jsx fragment
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
