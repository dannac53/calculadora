import React from "react";

const Integrantes = (props) => {
  return (
    <div className="col-6 row mb-3">
      <div className="col-4">
        <img
          className="rounded img-fluid"
          alt="Foto de integrante"
          src={props.urlImg}
        />
      </div>
      <div  className="col-8 d-flex flex-column">
        <span>{props.name}</span>
        <h6>{props.race}</h6>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Integrantes;
