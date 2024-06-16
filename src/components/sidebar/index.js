import React from 'react'
import './sidebar.css'
import SidebarButton from './sidebarButton'
import { MdSpaceDashboard, MdFavorite } from "react-icons/md";
import {FaGripfire, FaPlay, FaSignOutAlt} from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
export default function Sidebar() {
    return <div className='sidebar-container'>
        <img 
            src = "data:image/jpeg;base64,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"
            className="profile-img"
            alt="profile" />
        <div>
            <SidebarButton tittle="Player" to="/player" icon={<FaPlay />}/>
            <SidebarButton tittle="Library" to="/" icon={<IoLibrary />}/>
        </div>
        <SidebarButton tittle="Sign Out" to="" icon={<FaSignOutAlt />}/>
    </div>

}
