import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <div>
        <h1>INTEGRALES DEFINIDAS</h1>
      </div>
      <div className="row">
        <div className="col-12 row">
          <label className="col-3">T.SIMPSON 1/3-NEWTON</label>
          <label className="col-2">JORGE BOOLE</label>
          <label className="col-3">T.SIMPSON 3/8-NEWTON</label>
          <label className="col-2">SIMPSON ABIERTO</label>
          <label className="col-2">TRAPEZOIDAL</label>
        </div>
        <div></div>
        <div className="col-12">
          <input></input>
          <button type="submit" className="">
            Hallar solucion
          </button>
          <button type="submit" className="">
            Limpiar campos
          </button>
        </div>
      </div>
      <Link to={"/about"} className="btn btn-primary">
        Integrantes
      </Link>
    </div>
  );
};

export default Home;
