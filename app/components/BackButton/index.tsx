import React from "react";
import { Link } from "react-router-dom";

export default function BackButton() {
  return (
    <div>
      <Link to="/home">
        <button type="button" id="backButton">
          Voltar
        </button>
      </Link>
    </div>
  );
}