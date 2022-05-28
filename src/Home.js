import { Field, Form, Formik } from "formik";
import { useState } from "react";
import { Link } from "react-router-dom";
import { calculate } from "./operations";

const Home = () => {
  const values = { a: "", b: "", method: "", func: "", n: "" };
  const [data, setData] = useState({ table: [], area: 0, delta: 0 });

  return (
    <div className="bg d-flex justify-content-center align-items-center">
      <div className="card p-5">
        <h4 className="title mb-2">INTEGRALES DEFINIDAS</h4>
        <Formik
          initialValues={values}
          onSubmit={(values) => {
            const data = {
              a: parseInt(values.a),
              b: parseInt(values.b),
              method: values.method,
              func: values.func,
              n: values.n === "" ? 0 : values.n,
            };
            setData(calculate(data));
          }}
        >
          {({ values, resetForm }) => (
            <Form>
              <div className="row">
                <div className="form-check col-3">
                  <Field
                    className="form-check-input"
                    value="simpsonu"
                    type="radio"
                    name="method"
                  />
                  <label className="form-check-label">
                    T.SIMPSON 1/3-NEWTON
                  </label>
                </div>
                <div className="form-check col-2">
                  <Field
                    className="form-check-input"
                    value="boole"
                    type="radio"
                    name="method"
                  />
                  <label className="form-check-label">JORGE BOOLE</label>
                </div>
                <div className="form-check col-2">
                  <Field
                    className="form-check-input"
                    value="simpsont"
                    type="radio"
                    name="method"
                  />
                  <label className="form-check-label">T.SIMPSON 3/8</label>
                </div>
                <div className="form-check col-3">
                  <Field
                    className="form-check-input"
                    value="simpsono"
                    type="radio"
                    name="method"
                  />
                  <label className="form-check-label">SIMPSON ABIERTO</label>
                </div>
                <div className="form-check col-2">
                  <Field
                    className="form-check-input"
                    value="trapezoidal"
                    type="radio"
                    name="method"
                  />
                  <label className="form-check-label">TRAPEZOIDAL</label>
                </div>
                <div className="row mt-3">
                  <div className="col-4">
                    <div className="input-group mb-3">
                      <span className="input-group-text material-symbols-outlined">
                        functions
                      </span>
                      <Field
                        type="text"
                        className="form-control"
                        placeholder="Funcion"
                        name="func"
                      />
                      <span className="input-group-text">dx</span>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="input-group mb-3">
                      <span className="input-group-text">b</span>
                      <Field
                        type="text"
                        className="form-control"
                        placeholder="Limite superior"
                        name="b"
                      />
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="input-group mb-3">
                      <span className="input-group-text">a</span>
                      <Field
                        type="text"
                        className="form-control"
                        placeholder="Limite inferior"
                        name="a"
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="input-group mb-3">
                      <span className="input-group-text">n</span>
                      <Field
                        type="text"
                        className="form-control"
                        placeholder="Particiones"
                        name="n"
                        disabled={
                          values.method !== "trapezoidal" &&
                          values.method !== "simpsono"
                        }
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="input-group mb-3">
                      <span className="input-group-text material-symbols-outlined">
                        change_history
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        disabled
                        value={data?.delta}
                      />
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <button className="btn btn-primary" type="submit">
                      Hallar solucion
                    </button>
                    <button
                      className="btn btn-secondary"
                      type="reset"
                      onClick={resetForm}
                    >
                      Limpiar campos
                    </button>
                    <Link
                      to={"/about"}
                      className="btn btn-primary"
                      type="button"
                    >
                      Integrantes
                    </Link>
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
        <div className="mt-2 scroll">
          <table className="table">
            <thead>
              <tr>
                <th>x</th>
                <th>y</th>
              </tr>
            </thead>
            <tbody>
              {data?.table.map((row) => (
                <tr>
                  <td>{row.x}</td>
                  <td>{row.y}</td>
                </tr>
              ))}
              <tr>
                <td></td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th>Area</th>
                <th>{data?.area}</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
