import React from "react";
import Frame from "../../components/frame";
const AddData = () => {
  return (
    <Frame>
      <div className="card shadow">
        <div
          className="card-header py-3 add-table-header"
          style={{ justifyContent: "flex-start !important" }}
        >
          <h6 className="m-0 font-weight-bold text-primary add-table-header--1">
            Form Manajemen Data Distrik / Kecamatan
          </h6>
        </div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor="pilihKelurahan">Pilih Kelurahan</label>
              <select id="pilihKelurahan" className="form-control">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="kodeDistrik">Kode Distrik</label>
                <input
                  type="number"
                  className="form-control"
                  id="kodeDistrik"
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="namaDistrik">Nama Distrik</label>
                <input
                  type="number"
                  className="form-control"
                  id="namaDistrik"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="kodePos">Pilih Kelurahan</label>
              <input type="text" className="form-control" id="kodePos" />
            </div>
            <button type="submit" className="btn btn-primary">
              Simpan
            </button>
          </form>
        </div>
      </div>
    </Frame>
  );
};

export default AddData;
