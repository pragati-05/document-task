import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAuthentication, getUserDetails } from "../redux/selectors";
import { setAuthenticated } from "../redux/action";

const Header = () => {
  const userDetails = useSelector(getUserDetails);
  const userAuthenticated = useSelector(getAuthentication);

  const dispatch = useDispatch();
  let navigate = useNavigate();

  const logout = () => {
    dispatch(setAuthenticated(false));
    navigate("/");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top bg-white">
        <div className="container">
          <Link to="" className="navbar-brand nav-link">
            <span>LOGO</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                className="bi"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                ></path>
              </svg>
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }: any) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
            </ul>
            <div className="d-flex">
              {!userAuthenticated && (
                <>
                  <NavLink
                    className={({ isActive }: any) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                    to="login"
                  >
                    Login
                  </NavLink>
                  <NavLink
                    className={({ isActive }: any) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                    to="signup"
                  >
                    Signup
                  </NavLink>
                </>
              )}

              {userAuthenticated && (
                <>
                  <p>{userDetails.email}</p>
                  <li className="nav-link" onClick={logout}>
                    Logout
                  </li>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
