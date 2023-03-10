import React, { ReactElement} from 'react';
import './Container.css';
import 'bootstrap/dist/css/bootstrap.css';

type ContainerProps ={children:ReactElement}
const Container = (props:ContainerProps) => {
  return (
    <div id="root" className="container d-flex justify-content-center align-items-center">
      <div className="container d-flex justify-content-center align-items-center">
        {props.children}
      </div>
    </div>)
}

export default Container;