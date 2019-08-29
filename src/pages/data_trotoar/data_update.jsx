import React, { useEffect, useState, useRef } from "react";
import { getTrotoar, updateTrotoar } from "../../actions";
import { connect } from "react-redux";
import TrotoarForm from "./data_form";
import Frame from "../../components/frame";
import _ from "lodash";

const UpdateData = props => {
  useEffect(() => {
    props.getTrotoar(props.match.params.id);
  }, []);
  const onSubmit = formValues => {
    props.updateTrotoar(props.match.params.id, formValues);
  };
  const renderComponent = () => {
    if (!props.trotoar) {
      return (
        <Frame>
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </Frame>
      );
    }
    return (
      <TrotoarForm
        initialValues={_.pick(
          props.trotoar,
          "kode_trotoar",
          "nama",
          "klasifikasi_jalan"
        )}
        mapData={props.trotoar && props.trotoar.mapData}
        onSubmit={onSubmit}
        label="Update Data Trotoar"
      />
    );
  };
  return (
    <React.Fragment>
      {renderComponent()}
    </React.Fragment>
  );
};
const mapStateToProps = (state, ownProps) => {
  return {
    trotoar: state.dataTrotoar[ownProps.match.params.id]
  };
};
export default connect(
  mapStateToProps,
  { getTrotoar, updateTrotoar }
)(UpdateData);
