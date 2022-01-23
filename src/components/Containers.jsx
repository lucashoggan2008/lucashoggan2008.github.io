import React from 'react';
import '../css/containers.css'
export const FullContainer = (props) => {
  return <div className="full-container">{props.children}</div>;
};

export const ContainerTitleText = (props) => {
    return <p className="container-title-text">{props.children}</p>
}

export const HalfContainer = (props) => {
    return <div className="half-container">{props.children}</div>
}

export const ContainerDivider = () => {
    return <div className="container-divider"></div>
}

export const ContainerTwoColumn = (props) => {
    return <div className="container-row-half">{props.children}</div>
}

export const ContainerThreeRow = (props) => {
    return <div className="container-row-third">{props.children}</div>
}

export const ThirdContainer = (props) => {
    return <div className="third-container">{props.children}</div>
}


