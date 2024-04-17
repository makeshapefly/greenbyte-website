import React from 'react';

const ToggleLightDark = () => {
  return (
    <div className="darkmode-trigger">
        <label className="modeSwitch">
            <input type="checkbox"/>
            <span className="icon"></span>
        </label>
    </div>
  );
};

export default ToggleLightDark;