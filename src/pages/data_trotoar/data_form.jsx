import React, { useEffect, useState, useRef } from "react";
import BreadCrumb from "../../components/breadcrumb/breadcrumb";
import { Field, reduxForm } from "redux-form";
import MapControl from "../../components/map_control/map.control";
import Frame from "../../components/frame";
import { Link } from "react-router-dom";
const renderInputSingle = ({ input, label }) => {
  return (
    <div className="form-group">
      <label className="control-label col-xs-3">{label}</label>
      <div className="col-xs-8">
        <input
          autoComplete="off"
          {...input}
          name={label}
          className="form-control"
          type="text"
          required
        />
      </div>
    </div>
  );
};
const renderInputSelect = ({ input, label }) => {
  return (
    <div className="form-group">
      <label htmlFor={label}>{label}</label>
      <select id={label} className="form-control" {...input}>
        <option>...</option>
        <option value="Jalan Kabupaten">Jalan Kabupaten</option>
      </select>
    </div>
  );
};
const DataForm = props => {
  const [mapValue, setMapValue] = useState();
  const refMap = useRef();
  const getMapValue = mapValues => {
    setMapValue(mapValues);
  };
  const onSubmit = formValues => {
    const mapData = mapValue || [];
    const obj = { ...formValues, mapData: mapData };
    props.onSubmit(obj);
  };
  const onTab = () => {
    const resize = () => refMap.current.leafletElement.invalidateSize(false);
    setTimeout(() => {
      resize();
    }, 300);
  };
  const getRef = ref => {
    refMap.current = ref.current;
  };
  return (
    <React.Fragment>
      <Frame>
        <BreadCrumb
          currentLocation={["Beranda", "Data Trotoar", "Tambah Data"]}
        />
        <div className="card shadow mb-">
          <div className="card-header py-3 add-table-header">
            <h6 className="m-0 font-weight-bold text-primary add-table-header--1">
              {props.label && props.label}
            </h6>
            <button
              className="btn btn-primary btn-icon-split add-table-header--2"
              role="button"
              onClick={() => window.location.reload()}
              title="Refresh Data"
            >
              <span className="icon text-white-50">
                <i className="fa fa-sync" />
              </span>
              <span className="text">Refresh</span>
            </button>
            <Link to="/sig/trotoar" style={{ textDecoration: "none" }}>
              <button
                className="btn btn-warning btn-icon-split add-table-header--3"
                role="button"
                title="Refresh untuk memunculkan search bar"
              >
                <span className="icon text-white-50">
                  <i className="fa fa-arrow-left" />
                </span>
                <span className="text">Cancel</span>
              </button>
            </Link>
          </div>
          <div className="card-body">
            <nav>
              <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <a
                  className="nav-item nav-link active"
                  id="nav-home-tab"
                  data-toggle="tab"
                  href="#info-kondisi-fisik"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                >
                  Info Dasar Wilayah
                </a>
                <a
                  className="nav-item nav-link"
                  id="nav-contact-tab"
                  data-toggle="tab"
                  href="#info-permukaan"
                  role="tab"
                  aria-controls="nav-contact"
                  aria-selected="false"
                  onClick={onTab}
                >
                  Info Koordinat Jalan
                </a>
              </div>
            </nav>
            <form onSubmit={props.handleSubmit(onSubmit)}>
              <div className="tab-content add-form" id="nav-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="info-kondisi-fisik"
                  role="tabpanel"
                  aria-labelledby="nav-home-tab"
                >
                  <div>
                    <Field
                      name="kode_trotoar"
                      component={renderInputSingle}
                      label="Kode Trotoar"
                    />
                    <Field
                      name="nama"
                      component={renderInputSingle}
                      label="Nama"
                    />
                    <Field
                      name="klasifikasi_jalan"
                      component={renderInputSelect}
                      label="Klasifikasi Berdasarkan Alur Jalan"
                    />
                  </div>
                </div>

                <div
                  className="tab-pane fade map-wrapper"
                  id="info-permukaan"
                  role="tabpanel"
                  aria-labelledby="nav-contact-tab"
                >
                  <MapControl
                    tab={getRef}
                    getValue={getMapValue}
                    mapData={props.mapData && props.mapData}
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-block btn-primary mt-2">
                Simpan
              </button>
            </form>
          </div>
        </div>
      </Frame>
    </React.Fragment>
  );
};

export default reduxForm({
  form: "trotoarForm"
})(DataForm);
