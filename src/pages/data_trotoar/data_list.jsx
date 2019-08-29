import React, { useEffect, useRef } from "react";
import BreadCrumb from "../../components/breadcrumb/breadcrumb";
import { Link } from "react-router-dom";
import Frame from "../../components/frame";
import { connect } from "react-redux";
import { getTrotoars } from "../../actions";

const DataWilayah = props => {
  const tableRef = useRef();
  useEffect(() => {
    props.getTrotoars();
  }, []);
  const renderList = () => {
    const { listTrotoar } = props;
    if (!listTrotoar) {
      return (
        <tr>
          <td align="center" colSpan="5">
            <div className="spinner-grow" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </td>
        </tr>
      );
    }
    return listTrotoar.map((cur, key) => {
      if (cur) {
        return (
          <tr key={key}>
            <td>{key + 1}</td>
            <td>{cur.kode_trotoar}</td>
            <td>{cur.nama}</td>
            <td>{cur.klasifikasi_jalan}</td>
            <td className="text-center">
              <Link
                className="btn btn-warning btn-circle"
                href="#!"
                style={{ marginRight: "5px" }}
                to={`/sig/trotoar/edit/${cur.id}`}
              >
                <i className="fas fa-pen" />
              </Link>
              <Link to={`/sig/trotoar/delete/${cur.id}`} className="btn btn-danger btn-circle" >
                <i className="fas fa-trash" />
              </Link>
            </td>
          </tr>
        );
      }
    });
  };
  return (
    <Frame>
      <div className="container-fluid">
        <h1 className="h3 mb-2 text-gray-800">Data Trotoar</h1>
        <BreadCrumb currentLocation={["Beranda", "Data Trotoar"]} />
        <div className="card shadow mb-4">
          <div className="card-header py-3 add-table-header">
            <h6 className="m-0 font-weight-bold text-primary add-table-header--1">
              Tabel Data Trotoar
            </h6>
            <Link
              className="btn btn-success btn-icon-split add-table-header--2"
              title="Tambah Data"
              to="/sig/trotoar/add"
            >
              <span className="icon text-white-50">
                <i className="fa fa-plus" />
              </span>
              <span className="text">Tambah Data</span>
            </Link>
            <button
              className="btn btn-primary btn-icon-split add-table-header--3"
              role="button"
              onClick={() => window.location.reload()}
              title="Refresh untuk memunculkan search bar"
            >
              <span className="icon text-white-50">
                <i className="fa fa-sync" />
              </span>
              <span className="text">Refresh</span>
            </button>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table
                className="table table-bordered table-hover"
                width="100%"
                cellSpacing={0}
                ref={tableRef}
              >
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Kode Trotoar</th>
                    <th>Nama</th>
                    <th>Klasifikasi Jalan</th>
                    <th className="text-center">Aksi</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>No</th>
                    <th>Kode Trotoar</th>
                    <th>Nama</th>
                    <th>Klasifikasi Jalan</th>
                    <th className="text-center">Aksi</th>
                  </tr>
                </tfoot>
                <tbody>{props.listTrotoar && renderList()}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Frame>
  );
};
const mapStateToProps = state => {
  return {
    listTrotoar: Object.values(state.dataTrotoar)
  };
};
export default connect(
  mapStateToProps,
  { getTrotoars }
)(DataWilayah);
