import React from 'react';
import './SidebarRow.css';

const SidebarRow = (props) => {
    const { selected, title } = props
    return (
        <div className={`sidebarRow ${selected && "selected"}`}>
            {props.icon}
            <h2 className="sidebarRow__title">{title}</h2>
        </div>
    )
}

export default SidebarRow;