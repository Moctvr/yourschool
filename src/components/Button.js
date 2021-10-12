import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

function Button() {
  return (
    <Link to="Connexion">
      <button className="btnc">Connexion</button>
    </Link>
  );
}

export default Button;
