import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from './ReusableForm';

function NewKegForm(props){

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({brand: event.target.brand.value, name: event.target.name.value, price: event.target.price.value, type: event.target.type.value, alcoholContent: event.target.alcoholContent.value, }) // add number of pints in keg here
  }
}