import React from "react";
import PropTypes from "prop-types";

function Keg(props) {

  return (
    <React.Fragment>
      <div onClick = {() => props.whenKegClicked(props.id)}>
        <h3>{props.brand} - {props.name}</h3>
      </div>
        <p>{props.price}</p>
        <p>{props.type}</p>
        <p>{props.pintsInKeg}</p>
        <p>{props.alcoholContent}</p>
        <hr/>
      <button onClick={() => props.whenSellPintClicked(props.id)}></button>
    </React.Fragment>
  ); 
}

Keg.propTypes = {
  brand: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  pintsInKeg: PropTypes.number.isRequired,
  alcoholContent: PropTypes.string.isRequired,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func,
  whenSellPintClicked: PropTypes.func
};

export default Keg;