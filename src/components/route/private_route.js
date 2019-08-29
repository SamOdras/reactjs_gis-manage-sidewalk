import React, { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { auth } from "../../Firebase.utils";
import { connect } from 'react-redux';

const PrivateRoute = ({component: Component, isSignedIn, ...rest}) => { 
  const [user, setUser] = useState(null)
  useEffect(() => {
    checkUser();
  })
  const checkUser = () => {
    if(auth.currentUser) return setUser(true);
    return setUser(false)
  }
  return (
    <Route
    {...rest}
    render={props => {
      if(!user){
        return <Component {...props}/>
      }
      return <Redirect to="/login"/>
    }}
    />
  );
};

const mapStateToProps = state => {
  return {
    userAuth: state.userAuth
  }
}
export default connect(mapStateToProps)(PrivateRoute);
