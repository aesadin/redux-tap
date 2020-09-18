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
      <button onClick={() => props.whenSellPintClicked(props.id)}></button>
    </React.Fragment>
  ); // add number of pints per keg
}

Keg.propTypes = {
  brand: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  pintsInKeg: PropTypes.int.isRequired,
}

export default Keg;