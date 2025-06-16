import React, { useState } from "react";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <div className="d-flex justify-content-center mt-5">
        <form
          className="p-4 border rounded shadow mt-4"
          style={{ maxWidth: "400px", width: "100%" }}
        >
          <h3 className="text-center">{isLogin ? "Login" : "Signup"}</h3>

          {!isLogin && (
            <>
              <div className="mb-3">
                <label htmlFor="firstName" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
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
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder="Enter your last name"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="jobTitle" className="form-label">
                  Job Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="jobTitle"
                  placeholder="Enter your job title"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="gender" className="form-label">
                  Gender
                </label>
                <select className="form-select" id="gender" required>
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="profilePic" className="form-label">
                  Upload Profile Picture
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="profilePic"
                  accept="image/*"
                />
              </div>
            </>
          )}

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
            {isLogin ? "Login" : "Signup"}
          </button>

          <div className="text-center mt-2">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setIsLogin(!isLogin);
              }}
            >
              {isLogin
                ? "Don't have an account? Sign up"
                : "Already have an account? Login"}
            </a>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
