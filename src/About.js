import { Link } from "react-router-dom";

// const members = [
//   {
//     urlImg: require("./assets/img/imgAndres.jpg"),
//     name: "Danna Marcela Contreras Frias",
//     race: "Ingenieria de sistemas",
//     description: "Vive para comer, fan de friends y de colorear",
//   },
//   {
//     urlImg: require("./assets/img/imgAndres.jpg"),
//     name: "Roberto Carlos Bula Castro",
//     race: "Ingenieria de sistemas",
//     description: "Las frias los fines de semana y el free fire sin control",
//   },
//   {
//     urlImg: require("./assets/img/imgAndres.jpg"),
//     name: "Andres Felipe Puello Osorio",
//     race: "Ingenieria de sistemas",
//     description: "Fanatico de las hamburguesas y del anime",
//   },
// ];

const About = () => {
  return (
    <div
      className="bg d-flex justify-content-center align-items-center pt-3 pb-3"
      style={{ minHeight: "100vh" }}
    >
      <div className="card p-5">
        <h5 className="title">Integrantes</h5>
        <div className="row mt-3">
          {/* Vas a iterar (hacer un ciclo con javascript, un map) los integrantes del 
            grupo en el html, para ello, hay un constante que se llama members, con esa 
            informacion vas a pintar los diferentes cuadros, le agregas un key al 
            div que que los contiene, tambien le pones el nombre, carrera y las descripcion.
            */}
          <div className="col-6 row mb-3"> {/* Este es el div que contiene a un integrante*/}
            <div className="col-4">
              <img
                src="https://storage.googleapis.com/media.clinicavisualyauditiva.com/images/2019/11/211fd983-default-user-image.png"
                className="rounded img-fluid"
                alt="Foto de integrante"
              />
            </div>
            <div className="col-8 d-flex flex-column">
              <span>
                <strong>Danna Marcela Contreras Frias</strong>
              </span>
              <span>Ingenieria de sistemas</span>
              <span>Vive para comer, fan de friends y de colorear</span>
            </div>
          </div>
          {/* Aqui termina el bloque de codigo */}
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
