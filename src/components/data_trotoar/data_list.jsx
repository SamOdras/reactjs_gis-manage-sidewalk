import React from "react";
import BreadCrumb from "../reuseable/bread_crumb";
import { Link } from 'react-router-dom';

const DataWilayah = () => {
  return (
    <div class="container-fluid">
      <div>
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
              title="Refresh Data"
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
                id="dataTable"
                width="100%"
                cellSpacing={0}
              >
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Kode Trotoar</th>
                    <th>Nama</th>
                    <th>Alamat</th>
                    <th className="text-center">Aksi</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>No</th>
                    <th>Kode Trotoar</th>
                    <th>Nama</th>
                    <th>Alamat</th>
                    <th className="text-center">Aksi</th>
                  </tr>
                </tfoot>
                <tbody>
                  <tr>
                    <td>Bradley Greer</td>
                    <td>Software Engineer</td>
                    <td>London</td>
                    <td>41</td>
                    <td className="text-center">
                      <a
                        className="btn btn-warning btn-circle"
                        href="#!"
                        style={{ marginRight: "5px" }}
                      >
                        <i className="fas fa-pen" />
                      </a>
                      <a
                        className="btn btn-danger btn-circle"
                        onclick="return confirm('Apakah anda yakin akan menghapus data?')"
                        href="#!"
                      >
                        <i className="fas fa-trash" />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>Dai Rios</td>
                    <td>Personnel Lead</td>
                    <td>Edinburgh</td>
                    <td>35</td>
                    <td className="text-center">
                      <a
                        className="btn btn-warning btn-circle"
                        href="#!"
                        style={{ marginRight: "5px" }}
                      >
                        <i className="fas fa-pen" />
                      </a>
                      <a
                        className="btn btn-danger btn-circle"
                        onclick="return confirm('Apakah anda yakin akan menghapus data?')"
                        href="#!"
                      >
                        <i className="fas fa-trash" />
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataWilayah;
