import React from 'react';
import '../css/gridLayout.css'

const GridLayout = (props) => {
    const style = {
        gridTemplateRows:`repeat(${props.rows}, 1fr)`
    }
  return <div className="grid-layout">{props.children}</div>;
};

export default GridLayout;
