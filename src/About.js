import React from "react";
import { Link } from "react-router-dom";
import Integrantes from "./Integrantes";

const About = () => {
  const members = [
    {
      urlImg: require("./assets/img/imgDanna.jpg"),
      name: "Danna Contreras ",
      race: "Ingeniería de sistemas",
      description: "Vive para comer, fan de friends y de colorear",
    },
    {
      urlImg: require("./assets/img/imgRoberto.jpg"),
      name: "Roberto Bula",
      race: "Ingeniería de sistemas",
      description:
        "Las frias los fines de semana y jugar carlos duti sin control",
    },
    {
      urlImg: require("./assets/img/imgAndres.jpg"),
      name: "Andres Puello ",
      race: "Ingeniería de sistemas",
      description: "Fanatico de las hamburguesas y del anime",
    },
  ];

  return (
    <div className="bg d-flex justify-content-center align-items-center pt-3 pb-3">
      <div className="card p-5">
        <h5 className="title">Integrantes</h5>
        <div className="row mt-3">
          {}
          <div className="row">
            {members.map((integrantes) => {
              return (
                <Integrantes
                  urlImg={integrantes.urlImg}
                  key={integrantes.name}
                  race={integrantes.race}
                  description={integrantes.description}
                  name={integrantes.name}
                />
              );
            })}
          </div>
          {}
          <div className="col-12 text-center">
            <Link to={"/"} className="btn btn-primary">
              Volver
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
