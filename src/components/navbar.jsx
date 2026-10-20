import { useState } from 'react';
//where the bar actually start
function navbar() {
    //uniqe styling
    const iconImg = {
      width: '15px', 
      height: '15px'
    };
    const navFonts = {
      fontSize: '15px',
      fontWeight: '1'
    };
    const background = {};
    //Markup
    return (
      <div className="navStyle" style{background}>
        <img src={../asset/icon.png} style={iconImg} />
      </div>
    )
};
export default navbar;