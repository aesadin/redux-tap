import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";


function KegList(props){
  // const {onClickingSell} = props;

  return (
    <React.Fragment>
      {/* <button onClick={()=> onClickingSell(keg.id) }>Sell Pint</button> */}
      <hr/>
      {props.kegList.map((keg) =>
        <Keg
          whenKegClicked = {props.onKegSelection}
          brand={keg.brand}
          name={keg.name}
          price={keg.price}
          type={keg.type}
          alcoholContent={keg.alcoholContent}
          id={keg.id}
          key={keg.id}/>
      )}
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func
  // onClickingSell: PropTypes.func
};

export default KegList;