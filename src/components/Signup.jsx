import React from "react";

const Signup = () => {
  return (
    <>
 <div className="d-flex justify-content-center mt-5">
  <form
    className="p-4 border rounded shadow mt-4"
    style={{ maxWidth: "400px", width: "100%" }}
  >
    <h3 className="text-center">Login</h3>
    <div className="mb-3">
      <label htmlFor="firstName" className="form-label">
        First Name
      </label>
      <input
        type="firstName"
        className="form-control"
        id="firstName"
        placeholder="Enter your first name"
        required
      />
    </div>

    <div className="mb-3">
      <label htmlFor="lastName" className="form-label">
        Last Name
      </label>
      <input
        type="lastName"
        className="form-control"
        id="lastName"
        placeholder="Enter your last name"
        required
      />
    </div>

    <div className="mb-3">
      <label htmlFor="email" className="form-label">
        Email address
      </label>
      <input
        type="email"
        className="form-control"
        id="email"
        placeholder="Enter your email"
        required
      />
    </div>

    <div className="mb-3">
      <label htmlFor="password" className="form-label">
        Password
      </label>
      <input
        type="password"
        className="form-control"
        id="password"
        placeholder="Enter your password"
        required
      />
    </div>

    <button type="submit" className="btn btn-primary w-100">
      Login
    </button>
    <div className="text-center mt-2">

    <a  href="">Don't have an account? Sign up</a>
    </div>
  </form>
</div>


    </>
  );
};

export default Signup;
