import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container ">
      <section className="login">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col col-xl-10">
            <div class="card">
              <div class="row g-0">
                <div class="col-md-5 col-lg-4 d-none d-md-block">
                  <img
                    src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/img1.jpg"
                    alt="login form"
                    class="img-fluid"
                  />
                </div>
                <div class="col-md-7 col-lg-7 d-flex align-items-center mx-3">
                  <div class="card-body p-4 p-lg-5 text-black">
                    <h3 className="my-3">Login to your account</h3>
                    <form>
                      <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input
                          type="email"
                          class="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Enter email"
                        />
                        <small id="emailHelp" class="form-text text-muted">
                          We'll never share your email with anyone else.
                        </small>
                      </div>
                      <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input
                          type="password"
                          class="form-control"
                          id="exampleInputPassword1"
                          placeholder="Password"
                        />
                      </div>
                      <div class="d-flex justify-content-between align-items-center">
                        <div class="form-check">
                          <input
                            type="checkbox"
                            class="form-check-input"
                            id="exampleCheck1"
                          />
                          <label class="form-check-label" for="exampleCheck1">
                            Remember Me
                          </label>
                        </div>
                        <a href="#!" class="text-body">
                          Forgot password?
                        </a>
                      </div>
                      <div class="text-center text-lg-start mt-4 pt-2">
                        <Link to="/profile">
                          <button
                            type="submit"
                            class="btn btn-primary btn-lg"
                            // style="padding-left: 2.5rem; padding-right: 2.5rem;"
                          >
                            Login
                          </button>
                        </Link>
                        <p class="small fw-bold mt-2 pt-1 mb-0">
                          Don't have an account?{" "}
                          <a href="#!" class="link-danger">
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
