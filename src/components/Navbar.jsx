import { NavLink } from "react-router-dom";
import "../style.css";
import { useContext } from "react";
import { AuthContext } from "../auth/context/authContex";

export const Navbar = () => {
  const { login, handlerLogout } = useContext(AuthContext);
  const { username } = login;
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light py-4 px-3 fixed-top">
        <div className="d-flex align-items-center">
          <img src="fotoPerfil.png" width="50" className="m-0" />
          <p className="fs-6 mb-0 px-2 fw-semibold" id="navbarNombre">
            GARAY NICOLAS
          </p>
        </div>

        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto text-end">
            <li className="nav-item ">
              <NavLink className="nav-link px-4 fw-semibold" to="/">
                HOME
              </NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link px-4 fw-semibold">ABOUT</a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-4 fw-semibold">PROJECTS</a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-4 fw-semibold">CONTACT</a>
            </li>
            <li className="nav-item">
              {(login.user != undefined) ? (
                <button
                  className="nav-link px-4 fw-semibold text-danger"
                  onClick={handlerLogout}
                >
                  LOGOUT
                </button>
              ) : (
                <NavLink className="nav-link px-4 fw-semibold " to="/login">
                  LOGIN
                </NavLink>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
