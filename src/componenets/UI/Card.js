import React from 'react';
import classes from './Card.module.css'

function Card(props) {
  return (
  <div className={`${classes.card} ${props.className}`}>
    {/* prop.children k kaam hai Card tag ke andar likhi saari chijo ko is div ke andar present karna  */}
    {props.children}
    {/* iska use hamne Adduser ke return wale part me kiya hai  */}
  </div>
  );
}

export default Card;
