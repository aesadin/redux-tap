import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";


function KegList(props){
  return (
    <React.Fragment>
      <hr/>
      {props.kegList.map((keg) =>
        <Keg
          brand={keg.brand}
          name={keg.name}
          price={keg.price}
          type={keg.type}
          alcoholContent={keg.alcoholContent}
          id={ticket.id}
          key={ticket.id}/>
      )}
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func
};

export default KegList;