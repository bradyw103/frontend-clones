import React from 'react';
import SidebarRow from './SidebarRow';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <SidebarRow selected icon={<HomeIcon className="sidebarRow__icon" />} title="Home" />
            <SidebarRow icon={<WhatshotIcon className="sidebarRow__icon" />} title="Trending" />
            <SidebarRow icon={<SubscriptionsIcon className="sidebarRow__icon" />} title="Subscription" />
            <hr />
            <SidebarRow />
        </div>
    )
}

export default Sidebar;