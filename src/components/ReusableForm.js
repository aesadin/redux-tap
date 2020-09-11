import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props){
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='brand'
          placeholder='Brand Name' />
        <input
          type='text'
          name='name'
          placeholder='Beer Name' />
        <input
          name='type'
          placeholder='Type of Beer i.e. IPA, Pilsner, Amber' />
        <input
          type='price'
          name='price'
          placeholder='Keg Price' />
        <input
          type='text'
          name='alcoholContent'
          placeholder='Alcohol By Volume' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  ); // add section for number of pint per keg input
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;