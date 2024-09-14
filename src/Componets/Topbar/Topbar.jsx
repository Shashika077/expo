import React, { useState } from 'react';
import './Topbar.css';
import { assets } from '../../assets/assets';

const Topbar = () => {
  const [mode, setMode] = useState('dark'); // Initial mode is 'dark'

  const handleModeToggle = () => {
    setMode(prevMode => (prevMode === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className={`topbar-main ${mode}`}>
      <div className="navbar-contan">
        <div className="topbar-left">
          <img className="logo" src={assets.unilogo} alt="logo" />
          <img className="logo-line" src={assets.vline} alt="logo line" />
          <p className="top-text">University of Kelaniya</p>
        </div>
        <div className="topbar-middle">
         
        </div>
        <div className="topbar-right">
          <div className="r-2">
          <img
            className={`bookmark ${mode === 'dark' ? 'bookmark-dark' : 'bookmark-light'}`}
            src={mode === 'dark' ? assets.bookmark : assets.lbookmark}
            alt="bookmark"
          />
          <p className="top-text">My Bookmarks</p>
          </div>    
          <img
            className={`mode-toggle ${mode === 'dark' ? 'n-mode' : 'l-mode'}`}
            src={mode === 'dark' ? assets.nmode : assets.lmode}
            alt={`${mode} mode`}
            onClick={handleModeToggle}
          />
          <p className="top-text">{mode === 'dark' ? 'Night Mode' : 'Light Mode'}</p>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
