import React, { useState } from "react";
import { Field, reduxForm } from "redux-form";
import { auth, createUserProfileDocument } from "../../Firebase.utils";
import { Link } from "react-router-dom";

const Register = props => {
  const [confirmErr, setConfirmErr] = useState('');
  const inputComponent = ({ input, label, type, meta }) => {
    const error = meta.error && meta.touched ? meta.error : '';
    setConfirmErr(`${error}`);
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
  const onSubmit = formValues => {
    console.log(formValues);
  };
  return (
    <div
      className="bg-gradient-primary"
      style={{ height: "100vh", paddingTop: "30px" }}
    >
      <div className="container ">
        <div className="card o-hidden border-0 shadow-lg ">
          <div className="card-body p-0">
            {/* Nested Row within Card Body */}
            <div className="row">
              <div className="col-lg-5 d-none d-lg-block bg-register-image" />
              <div className="col-lg-7">
                <div className="p-5">
                  <div className="text-center">
                    <h1 className="h4 text-gray-900 mb-4">
                      Create an Account!
                    </h1>
                  </div>
                  <div className="alert alert-danger" role="alert">
                    {confirmErr}
                  </div>
                  <form
                    className="user"
                    onSubmit={props.handleSubmit(onSubmit)}
                  >
                    <Field
                      name="display_name"
                      component={inputComponent}
                      label="Your Name"
                      type="text"
                    />
                    <Field
                      name="email"
                      component={inputComponent}
                      label="Email"
                      type="email"
                    />
                    <Field
                      name="password"
                      component={inputComponent}
                      label="Password"
                      type="password"
                    />
                    <Field
                      name="confirm_password"
                      component={inputComponent}
                      label="Repeat Password"
                      type="password"
                    />
                    <button
                      href="login.html"
                      className="btn btn-primary btn-user btn-block"
                      type="submit"
                    >
                      Register Account
                    </button>
                    <hr />
                    <a
                      href="index.html"
                      className="btn btn-google btn-user btn-block"
                    >
                      <i className="fab fa-google fa-fw" /> Register with Google
                    </a>
                  </form>
                  <hr />
                  <div className="text-center">
                    <Link className="small" to="/login">
                      Already have an account? Login!
                    </Link>
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
export default reduxForm({
  form: "registerForm",
})(Register);
