import React, { useState, useEffect } from "react";
import { Route, Router } from "react-router-dom";
import DataWilayah from "./pages/data_wilayah/data_list";
import DataTrotoar from "./pages/data_trotoar/data_list";
import AddDataWilayah from "./pages/data_wilayah/data_add";
import AddDataTrotoar from "./pages/data_trotoar/data_add";
import UpdateDataTrotoar from "./pages/data_trotoar/data_update";
import DeleteDataTrotoar from "./pages/data_trotoar/data_delete";
import Dashboard from "./pages/dashboard";
import Register from "./pages/register";
import Login from "./pages/login";
import history from "./History";
import { auth, createUserProfileDocument } from './Firebase.utils';
import PrivateRoute from './components/route/private_route';

class App extends React.Component {
  render() {   
    return (
      <Router history={history}>
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/" exact component={Dashboard} />
        <Route path="/sig/wilayah" exact component={DataWilayah} />
        <Route path="/sig/wilayah/add" component={AddDataWilayah} />
        <Route path="/sig/wilayah/edit/:id" component={AddDataWilayah} />
        <Route path="/sig/wilayah/delete/:id" component={AddDataWilayah} />
        <Route path="/sig/trotoar" exact component={DataTrotoar} />
        <Route path="/sig/trotoar/add" component={AddDataTrotoar} />
        <Route path="/sig/trotoar/edit/:id" component={UpdateDataTrotoar} />
        <Route path="/sig/trotoar/delete/:id" component={DeleteDataTrotoar} />
      </Router>
    );
  }
}

export default App;
