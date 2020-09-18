import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function EditKegForm(props){
  const { keg } = props;

  function handleEditKegFormSubmission(event) {
    event.preventDefault();
    props.onEditKeg({brand: event.target.brand.value, name: event.target.name.value, price: event.target.price.value, pintsInKeg: event.target.pintsInKeg.value, alcoholContent: event.target.alcoholContent.value, id: ticket.id});
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditKegFormSubmission} /* new code */ 
        buttonText="Update Keg" />
    </React.Fragment>
  );
}

EditKegForm.propTypes = {
  onEditKeg: PropTypes.func
};

export default EditKegForm;