import React from 'react'
import './topbar.css'
import { Search, Person, Chat, Notifications } from '@mui/icons-material'
const topbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
      <span className="logo"><img src="data:image/png;base64,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  " alt="" /></span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className='searchIcon'/>
          <input placeholder="Search for friends, post or video" className="searchInput"/>
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLinks">Homepage</span>
          <span className="topbarLinks">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person/>
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat/>
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications/>
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src="src\assets\person\1.jpg" alt="" className="topbarImg" />
      </div>
    </div>
  )
}
export default topbar
