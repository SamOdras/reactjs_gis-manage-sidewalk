import React from "react";
import { Route, Router } from "react-router-dom";
import Navbar from "./reuseable/navbar";
import DataWilayah from "./data_wilayah/data_list";
import DataTrotoar from "./data_trotoar/data_list";
import AddDataWilayah from "./data_wilayah/data_add";
import AddDataTrotoar from "./data_trotoar/data_add";
import Dashboard from "./dashboard";
import Register from "./register";
import Login from "./login";
import Frame from "./reuseable";
import history from "../history";


class App extends React.Component {
  renderPage = () => {
    const pathname = history.location.pathname;
    if (pathname === "/login") {
      return <Route path="/login" exact component={Login} />;
    } else if (pathname === "/register") {
      return <Route path="/register" exact component={Register} />;
    } else {
      return (
        <Frame>
          <Navbar />
          <Route path="/" exact component={Dashboard} />
          <Route path="/sig/wilayah" exact component={DataWilayah} />
          <Route path="/sig/wilayah/add" exact component={AddDataWilayah} />
          <Route path="/sig/wilayah/edit/:id" exact component={DataWilayah} />
          <Route path="/sig/wilayah/delete/:id" exact component={DataWilayah} />
          <Route path="/sig/trotoar" exact component={DataTrotoar} />
          <Route path="/sig/trotoar/add" exact component={AddDataTrotoar} />
          <Route path="/sig/trotoar/edit/:id" exact component={DataTrotoar} />
          <Route path="/sig/trotoar/delete/:id" exact component={DataTrotoar} />
        </Frame>
      );
    }
  };
  render() {
    return <Router history={history}>{this.renderPage()}</Router>;
  }
}

export default App;
