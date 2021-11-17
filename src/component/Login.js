import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container ">
      <section className="login">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card">
              <div className="row g-0">
                <div className="col-md-5 col-lg-4 d-none d-md-block">
                  <img
                    src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/img1.jpg"
                    alt="login form"
                    className="img-fluid"
                  />
                </div>
                <div className="col-md-7 col-lg-7 d-flex align-items-center mx-3">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <h3 className="my-3">Login to your account</h3>
                    <form>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">
                          Email address
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Enter email"
                        />
                        <small id="emailHelp" className="form-text text-muted">
                          We'll never share your email with anyone else.
                        </small>
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input
                          type="password"
                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder="Password"
                        />
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="exampleCheck1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="exampleCheck1"
                          >
                            Remember Me
                          </label>
                        </div>
                        <a href="#!" className="text-body">
                          Forgot password?
                        </a>
                      </div>
                      <div className="text-center text-lg-start mt-4 pt-2">
                        <Link to="/profile">
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg"
                            // style="padding-left: 2.5rem; padding-right: 2.5rem;"
                          >
                            Login
                          </button>
                        </Link>
                        <p className="small fw-bold mt-2 pt-1 mb-0">
                          Don't have an account?{" "}
                          <a href="#!" className="link-danger">
                            Register
                          </a>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
