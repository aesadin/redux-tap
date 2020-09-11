import React from "react";
import PropTypes from "prop-types";

function Keg(props) {

  return (
    <React.Fragment>
      <h3>{props.brand} - {props.name}</h3>
      <p>{props.price}</p>
      <p>{props.type}</p>
      <p>{props.alcoholContent}</p>
      <hr/>
    </React.Fragment>
  );
}