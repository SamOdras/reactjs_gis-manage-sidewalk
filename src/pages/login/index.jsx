import React, { useState, useEffect } from "react";
import {
  signInWithGoogle,
  auth,
  createUserProfileDocument
} from "../../Firebase.utils";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import history from "../../History";
import { connect } from "react-redux";
import { signIn } from "../../actions";

const inputComponent = ({ input, label, type }) => {
  return (
    <div className="form-group">
      <input
        {...input}
        type={type}
        className="form-control form-control-user"
        placeholder={label}
        required
      />
    </div>
  );
};
const Login = props => {
  const [error, setError] = useState("");
  const onSubmit = async val => {
    try {
      await auth.signInWithEmailAndPassword(val.email, val.password);
      history.push("/");
    } catch (error) {
      setError(`${error}`);
    }
  };
  const onSubmitWithGoogle = () => {
    signInWithGoogle();
  };
  useEffect(() => {
    let unsub = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        props.signIn({ name: userAuth.displayName, email: userAuth.email });
      }
    });
    return () => unsub;
  },[])
  return (
    <div className="bg-gradient-primary">
      <div className="container" style={{ height: "100vh" }}>
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                {/* Nested Row within Card Body */}
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-block bg-login-image" />
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                      </div>
                      {error && (
                        <div className="alert alert-danger" role="alert">
                          {error}
                        </div>
                      )}
                      <form
                        className="user"
                        onSubmit={props.handleSubmit(onSubmit)}
                      >
                        <div>
                          <Field
                            name="email"
                            type="email"
                            component={inputComponent}
                            label="Enter Email Address..."
                          />
                          <Field
                            name="password"
                            type="password"
                            component={inputComponent}
                            label="Password..."
                          />
                        </div>
                        <button
                          href="#!"
                          className="btn btn-primary btn-user btn-block"
                        >
                          Login
                        </button>
                        <hr />
                        <a
                          href="#!"
                          className="btn btn-google btn-user btn-block"
                          onClick={onSubmitWithGoogle}
                        >
                          <i className="fab fa-google fa-fw" /> Login with
                          Google
                        </a>
                      </form>
                      <hr />
                      <div className="text-center">
                        <Link className="small" to="/register">
                          Create an Account!
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const LoginData = reduxForm({
  form: "formLogin"
})(Login);

export default connect(
  null,
  { signIn }
)(LoginData);
