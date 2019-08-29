import React, { useEffect } from "react";
import Modal from "../../components/modal/modal.control";
import { connect } from "react-redux";
import { deleteTrotoar, getTrotoar } from "../../actions";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
const DeleteTrotoar = props => {
  useEffect(() => {
    props.getTrotoar(props.match.params.id);
  }, []);
  const renderActions = () => {
    return (
      <React.Fragment>
        <Button
          color="secondary"
          onClick={() => props.deleteTrotoar(props.match.params.id)}
        >
          Delete
        </Button>

        <Link style={{ textDecoration: "none" }} to="/sig/trotoar">
          <Button color="primary" autoFocus>
            Cancel
          </Button>
        </Link>
      </React.Fragment>
    );
  };
  const renderContent = () => {
    if (!props.trotoar) {
      return "Do you want to delete this item ?";
    }
    return `Do you want to delete this item : ${props.trotoar.nama}`;
  };
  return (
    <div>
      <Modal
        title="Are you sure to delete this ?"
        action={renderActions()}
        content={renderContent()}
      />
    </div>
  );
};
const mapStateToProps = (state, ownProps) => {
  return {
    trotoar: state.dataTrotoar[ownProps.match.params.id]
  };
};
export default connect(
  mapStateToProps,
  { getTrotoar, deleteTrotoar }
)(DeleteTrotoar);
