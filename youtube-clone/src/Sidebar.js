import React from 'react';
import SidebarRow from './SidebarRow';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <SidebarRow selected icon={<HomeIcon className="sidebarRow__icon" />} title="Home" />
            <SidebarRow icon={<WhatshotIcon className="sidebarRow__icon" />} title="Trending" />
            <SidebarRow icon={<SubscriptionsIcon className="sidebarRow__icon" />} title="Subscription" />
            <hr />
            <SidebarRow icon={<VideoLibraryIcon className="sidebarRow__icon" />} title="Library" />
            <SidebarRow icon={<HistoryIcon className="sidebarRow__icon" />} title="History" />
            <SidebarRow icon={<OndemandVideoIcon className="sidebarRow__icon" />} title="Your Videos" />
            <SidebarRow icon={<WatchLaterIcon className="sidebarRow__icon" />} title="Watch Later" />
            <SidebarRow icon={<ThumbUpAltOutlinedIcon className="sidebarRow__icon" />} title="Liked Videos" />
            <SidebarRow icon={<ExpandMoreOutlinedIcon className="sidebarRow__icon" />} title="Show More" />
            <hr />
        </div>
    )
}

export default Sidebar;