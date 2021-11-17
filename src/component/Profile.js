import React, { useState } from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  const [image, setImage] = useState(
    "https://www.clipartkey.com/mpngs/m/152-1520367_user-profile-default-image-png-clipart-png-download.png"
  );
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 profile-image">
              <div className="card mb-5" style={{ border: "none" }}>
                <div className="card-body text-center">
                  <div
                    className="image-holder"
                    style={{
                      margin: "auto",
                      width: "153px",
                      height: "153px",
                      border: "2px solid gray",
                      borderRadius: "50%",
                      marginTop: "1rem",
                    }}
                  >
                    <img
                      src={image}
                      alt="avatar"
                      id="img"
                      className="rounded-circle img-fluid"
                      style={{ width: "150px", objectFit: "cover" }}
                    />
                  </div>
                  <input
                    type="file"
                    name="image-upload"
                    id="input"
                    accept="image/*"
                    onChange={imageHandler}
                    style={{ display: "none" }}
                  />
                  <div className="label">
                    <label htmlFor="input" className="image-upload">
                      <i className="material-icons">add_photo_alternate</i>
                      Edit your photo
                    </label>
                  </div>
                  <h5 className="my-3">{name ? name : "Name"}</h5>
                  <p className="text-muted mb-1">{title ? title : "Job Title"}</p>
                  <p className="text-muted mb-4">Address</p>
                  <div className="d-flex justify-content-center mb-2">
                    <button type="button" className="btn btn-primary">
                      Follow
                    </button>
                    <button type="button" className="btn btn-outline-primary ms-1">
                      Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="card mb-4" style={{ border: "none" }}>
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Full Name</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">
                        <input
                          className="form-control"
                          type="text"
                          name=""
                          id=""
                          style={{ border: "none" }}
                          placeholder="Enter your Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Date of Birth</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">
                        {" "}
                        <input
                          className="form-control"
                          type="text"
                          name=""
                          id=""
                          style={{ border: "none" }}
                          placeholder="Enter your Date of Birth"
                        />
                      </p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Job Title</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">
                        {" "}
                        <input
                          className="form-control"
                          type="text"
                          name=""
                          id=""
                          style={{ border: "none" }}
                          placeholder="Enter your Job Title"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                        />
                      </p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Religion</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">
                        {" "}
                        <input
                          className="form-control"
                          type="text"
                          name=""
                          id=""
                          style={{ border: "none" }}
                          placeholder="Enter your Religion"
                        />
                      </p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Height</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">
                        {" "}
                        <input
                          className="form-control"
                          type="text"
                          name=""
                          id=""
                          style={{ border: "none" }}
                          placeholder="Enter your Height"
                        />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="item d-flex justify-content-around align-items-center"
                style={{ border: "none" }}
              >
                <button type="button" className="btn btn-success">
                  Save
                </button>
                <Link to="/">
                  {" "}
                  <button type="button" className="btn btn-primary">
                    Logout
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
