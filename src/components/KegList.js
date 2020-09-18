import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";


function KegList(props){

  return (
    <React.Fragment>
      <hr/>
      {props.kegList.map((keg) =>
        <Keg
          whenKegClicked = {props.onKegSelection}
          whenSellPintClicked = {props.onSellPintSelection}
          brand={keg.brand}
          name={keg.name}
          price={keg.price}
          type={keg.type}
          pintsInKeg={keg.pintsInKeg}
          alcoholContent={keg.alcoholContent}
          id={keg.id}
          key={keg.id}/>
      )}
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func,
  onSellPintSelection: PropTypes.func
};

export default KegList;