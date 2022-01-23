import React from 'react';
import '../css/containers.css'
export const FullContainer = (props) => {
  return <div className="full-container">{props.children}</div>;
};

export const ContainerTitleText = (props) => {
    return <p className="container-title-text">{props.children}</p>
}

export const HalfContainer = (props) => {
    return <li className="container-component-half"><div className="half-container">{props.children}</div></li>
}

export const ContainerDivider = () => {
    return <div className="container-divider"></div>
}

export const ContainerRow = (props) => {
    return <ul className="container-row">{props.children}</ul>
}

export const ThirdContainer = (props) => {
    return <li className="container-component-third"><div className="third-container">{props.children}</div></li>
}


