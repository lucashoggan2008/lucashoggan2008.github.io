import React from 'react';
import '../css/pageBody.css'

const PageBody = (props) => {
  return <div className="page-body">{props.children}</div>;
};

export default PageBody;
