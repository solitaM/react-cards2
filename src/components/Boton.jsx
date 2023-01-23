import React from "react";
import Icono from "./Icono";

const Boton = () => {
  return (
    <div className="contenedor">
      <button id="boton">
        <Icono />
        Comprar
      </button>
    </div>
  );
};

export default Boton;
