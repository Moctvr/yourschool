import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

function Button({connexion}) {
  return (
    <Link to="Connexion">
      <button className="btnc">{connexion}</button>
    </Link>
  );
}

export default Button;
