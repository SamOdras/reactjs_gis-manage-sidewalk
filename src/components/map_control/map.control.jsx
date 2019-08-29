import React, { useEffect, useState, useRef } from "react";
import { Map, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
const MapControll = props => {
  const [btnCondition, setBtnCondition] = useState(true);
  const mapRef = useRef();
  const [position, setPosition] = useState([]);
  const [marker, setMarker] = useState([]);
  useEffect(() => {
    props.tab(mapRef);
    initMapValue();
  }, []);
  const initMapValue = () => {
    const data = props.mapData || [];
    setPosition(data);
  }
  const onMapClick = e => {
    if (marker.length > 1) {
      marker.pop();
      setMarker([...marker]);
    }
    setPosition([...position, e.latlng]);
    setMarker([...marker, e.latlng]);
    setBtnCondition(false);
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
    if (position.length !== 1) {
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
    setBtnCondition(!btnCondition);
  };
  const getValue = () => {
    setBtnCondition(!btnCondition);
    props.getValue(position)
  }
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
          type="button"
          id="revise"
          className="btn btn-circle btn-info add-table-header--2"
          data-toggle="tooltip"
          data-placement
          title="Revisi Data"
          onClick={revLine}
          disabled={btnCondition}
        >
          <i className="fa fa-sync" />
        </button>
        <button
          type="button"
          id="deleteAll"
          className=" btn btn-circle btn-danger"
          data-toggle="tooltip"
          data-placement
          title="Hapus Data"
          onClick={delLine}
          disabled={btnCondition}
        >
          <i className="fa fa-trash" />
        </button>
        <button
          type="button"
          id="deleteAll"
          className=" btn btn-circle btn-success"
          data-toggle="tooltip"
          data-placement
          title="Simpan Data"
          onClick={getValue}
          disabled={btnCondition}
        >
          <i className="fa fa-download" />
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
