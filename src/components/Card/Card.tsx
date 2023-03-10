import React, { ReactElement } from 'react';
import './Card.css';
import 'bootstrap/dist/css/bootstrap.css';

type CardProps ={
  title:string,
  price:number, 
  quantity?:number, 
  image?:string,
  children:ReactElement, 
  setTotal?:Function, 
  setPhones?:Function,
}//children?:JSX.Element}
//style={{ width: "18rem" }}
//style={{background:"green"}}
const Card = (props:CardProps) => {
  return (
    <div id="root" className="d-flex justify-content-center align-items-center">
      <div className="card">       
        <div className="card-body">
          <p className="card-text">{props.title}</p>
          <img src={props.image} alt="products" className='mt-5 mb-5'/>
          <h5 className="card-text">{props.price}</h5>
          <div className='d-flex justify-content-center align-items-center'>{props.children}</div>  
        </div>
      </div>
    </div>)
}

export default Card;