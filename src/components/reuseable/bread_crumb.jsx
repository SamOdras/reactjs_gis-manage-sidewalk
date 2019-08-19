import React from "react";

const BreadCrumb = props => {
  const renderComponent = () => {
    const length = props.currentLocation.length - 1;
    return props.currentLocation.map((cur, key) => {
      if (key === length) {
        return (
          <li className="breadcrumb-item active" aria-current="page" key={key}>
            {cur}
          </li>
        );
      }
      return (
        <li className="breadcrumb-item" key={key}>
          <a href="#">{cur}</a>
        </li>
      );
    });
  };
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">{renderComponent()}</ol>
    </nav>
  );
};

export default BreadCrumb;
