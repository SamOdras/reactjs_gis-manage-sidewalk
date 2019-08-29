import React, { useEffect, useState, useRef } from "react";
import { createTrotoar } from '../../actions';
import { connect } from 'react-redux';
import TrotoarForm from './data_form';


const AddData = props => {
  const onSubmit = formValues => {
    props.createTrotoar(formValues)
  };
  return (
    <React.Fragment>
      <TrotoarForm onSubmit={onSubmit} label="Tambah Data Trotoar"/>
    </React.Fragment>
  );
};

export default connect(null, { createTrotoar })(AddData);
