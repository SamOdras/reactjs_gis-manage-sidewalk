import React, { useEffect, useState, useRef } from "react";
import { Map, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
const MapControll = props => {
  const revBtnRef = useRef();
  const delBtnRef = useRef();
  const mapRef = useRef();
  const [position, setPosition] = useState([]);
  const [marker, setMarker] = useState([]);
  useEffect(() => {
    props.tab(mapRef);
  }, []);
  const disabledBtn = () => {
    revBtnRef.current.setAttribute("disabled", "");
    delBtnRef.current.setAttribute("disabled", "");
  };
  const enableBtn = () => {
    revBtnRef.current.removeAttribute("disabled");
    delBtnRef.current.removeAttribute("disabled");
  };
  const onMapClick = e => {
    if (marker.length > 1) {
      marker.pop();
      setMarker([...marker]);
    }
    setPosition([...position, e.latlng]);
    setMarker([...marker, e.latlng]);
    enableBtn();
  };
  const renderMarker = () => {
    if (marker.length === 0) {
      return;
    }
    return marker.map((cur, key) => {
      return (
        <Marker position={cur} key={key}>
          <Popup>A Pretty poppup</Popup>
        </Marker>
      );
    });
  };
  const revLine = () => {
    if (position.length != 1) {
      position.pop();
      marker.pop();
      setPosition([...position]);
      setMarker([...marker, position[position.length - 1]]);
    } else {
      delLine();
    }
  };
  const delLine = () => {
    setPosition([]);
    setMarker([]);
    disabledBtn();
  };
  return (
    <div className="card">
      <div
        className="card-header py-3 add-table-header"
        style={{ justifyContent: "flex-start !important" }}
      >
        <h6 className="m-0 font-weight-bold text-primary add-table-header--1">
          Input Koordinat Jalan
        </h6>
        <button
          id="revise"
          className="btn btn-circle btn-info add-table-header--2"
          data-toggle="tooltip"
          data-placement
          title="Revisi Data"
          ref={revBtnRef}
          onClick={revLine}
        >
          <i className="fa fa-sync" />
        </button>
        <button
          id="deleteAll"
          className=" btn btn-circle btn-danger"
          data-toggle="tooltip"
          data-placement
          title="Hapus Data"
          ref={delBtnRef}
          onClick={delLine}
        >
          <i className="fa fa-trash" />
        </button>
      </div>
      <div className="card-body">
        <div id="map" className="map-content">
          <Map
            ref={mapRef}
            zoom={13}
            onClick={onMapClick}
            center={[51.505, -0.09]}
          >
            <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}" />
            {renderMarker()}
            <Polyline color="purple" positions={position} />
          </Map>
        </div>
      </div>
    </div>
  );
};

export default MapControll;
