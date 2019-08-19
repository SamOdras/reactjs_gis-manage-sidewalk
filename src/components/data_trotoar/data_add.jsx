import React, { useEffect, useState, useRef } from "react";
import BreadCrumb from "../reuseable/bread_crumb";
import { Field, reduxForm } from "redux-form";
import MapControl from '../reuseable/map_controll';

const AddData = props => {
  const refMap = useRef();
  const renderInputSingle = ({ input, label }) => {
    return (
      <div className="form-group">
        <label className="control-label col-xs-3">{label}</label>
        <div className="col-xs-8">
          <input
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
        <select id={label} className="form-control">
          <option selected>Jalan Kabupaten</option>
          <option>...</option>
        </select>
      </div>
    );
  };
  const onSubmit = formValues => {
    console.log(formValues);
  };
  const onTab = () => {
    const resize = () => refMap.current.leafletElement.invalidateSize(false);
    setTimeout(() => {
      resize();
    }, 300);
  }
  const getRef = (ref) => {
    refMap.current = ref.current;
  }
  return (
    <React.Fragment>
      <BreadCrumb
        currentLocation={["Beranda", "Data Trotoar", "Tambah Data"]}
      />
      <div className="card shadow mb-">
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
              <a
                className="nav-item nav-link"
                id="nav-profile-tab"
                data-toggle="tab"
                href="#info-klasifikasi"
                role="tab"
                aria-controls="nav-profile"
                aria-selected="false"
              >
                Upload Gambar
              </a>
            </div>
          </nav>
          <div className="tab-content add-form" id="nav-tabContent">
            <div
              className="tab-pane fade show active"
              id="info-kondisi-fisik"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
              <form onSubmit={props.handleSubmit(onSubmit)}>
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
                <button type="submit" className="btn btn-primary">
                  Simpan
                </button>
              </form>
            </div>
            <div
              className="tab-pane fade"
              id="info-klasifikasi"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
            >
              <form onSubmit={props.handleSubmit(onSubmit)}>
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
                <button type="submit" className="btn btn-primary">
                  Simpan
                </button>
              </form>
            </div>
            <div
              className="tab-pane fade map-wrapper"
              id="info-permukaan"
              role="tabpanel"
              aria-labelledby="nav-contact-tab"
            >
              <MapControl tab={getRef}/>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default reduxForm({
  form: "trotoarForm"
})(AddData);
