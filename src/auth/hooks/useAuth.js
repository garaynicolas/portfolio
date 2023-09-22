import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";
import Swal from "sweetalert2";

const initialLogin = JSON.parse(sessionStorage.getItem("login")) || {
  isAuth: false,
  isAdmin: false,
  user: undefined,
};

export const useAuth = () => {
  const [login, setInitialLogin] = useState(initialLogin);
  const navigate = useNavigate();

  const handlerLogin = async ({ username, password }) => {
    try {
      const response = await loginUser({ username, password });
      const token = response.data.token;
      const claims = JSON.parse(window.atob(token.split(".")[1]));
      const user = { username: claims.sub };
      sessionStorage.setItem(
        "login",
        JSON.stringify({
          isAuth: true,
          isAdmin: claims.isAdmin,
          user,
        })
      );
      sessionStorage.setItem("token", `Bearer ${token}`);
      navigate("/");
    } catch (error) {
      if (error.response?.status == 401) {
        Swal.fire("Error Login", "Username o password invalidos", "error");
      } else if (error.response?.status == 403) {
        Swal.fire(
          "Error Login",
          "No tiene acceso al recurso o permisos!",
          "error"
        );
      } else {
        throw error;
      }
    }
    window.location.reload();
  };

  const handlerLogout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("login");
    sessionStorage.clear();
    window.location.reload();
  };

  return {
    login,
    handlerLogin,
    handlerLogout,
  };
};
