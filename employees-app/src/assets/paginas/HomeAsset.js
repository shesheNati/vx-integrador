import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { actionDeleteAssets, getAllAssets } from "../../store/slices/assets/thunks";

import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";

export const HomeAsset = () => {
  // esto es para traer del store informacion los empleados
  const { assets } = useSelector((state) => state.assets);
  const dispatch = useDispatch();

  const eliminar = (id) => {
    Swal.fire({
      title: "Desea eliminar este asset?",

      showCancelButton: true,
      confirmButtonText: "Eliminar",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        dispatch(actionDeleteAssets(id, Swal));
        // Swal.fire("Saved!", "", "success");
      }
    });
  };

  const [activo, setAssets] = useState({
    name: "",
    type: "",
  });

  const handleChange = (e) => {
    setAssets({
      ...activo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getAllAssets(activo));
    
  };
  return (
    <>
      <div>
        <div>
          {assets.length == 0 ? (
            <h1> No hay activos</h1>
          ) : (
            <h1>Listado de activos de la empresa</h1>
          )}

          <form style={{ width: 500 }}>
            <div className="mb-3">
              <label for="name" className="form-label">
                Nombre:
              </label>
              <input
                name="name"
                onChange={handleChange}
                value={activo.name}
                type="text"
                className="form-control"
                id="name"
                aria-describedby="emailHelp"
                required
              />
            </div>
            <div className="mb-3">
              <label for="type" className="form-label">
                tipo:
              </label>
              <input
                name="type"
                onChange={handleChange}
                value={activo.type}
                placeholder="electrodomestico"
                type="text"
                className="form-control"
                id="type"
                required
                aria-describedby="emailHelp"
              />
            </div>

            <button
              type="submit"
              onClick={handleSubmit}
              className="btn btn-primary"
            >
              Buscar
            </button>
          </form>

          <table class="table">
            <thead>
              <tr>
                <th scope="col"> Activo Id</th>
                <th scope="col"> Empleado Id</th>
                <th scope="col">Nombre</th>
                <th scope="col">Tipo</th>
                <th scope="col">Codigo</th>
                <th scope="col">Opciones</th>
              </tr>
            </thead>
            <tbody>
              {assets.map(({ asset_id, employee_id, name, type, code }) => {
                return (
                  <tr>
                    <th scope="row">{asset_id}</th>
                    <td>{employee_id}</td>
                    <td>{name}</td>
                    <td>{type}</td>
                    <td>{code}</td>
                    <td>
                      <Link to={`/update/${asset_id}`} className="btn btn-info">
                        Editar
                      </Link>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => {
                          eliminar(asset_id);
                        }}
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {/* <ul>
            {assets.map(({ asset_id, employee_id, name, type, code }) => {
              return (
                <div className="card" style={{ width: "18rem" }}>
                  <div key={asset_id} className="card-body">
                    <h5 className="card-title">
                      {employee_id} {name} {type}
                    </h5>
                    <h6 className="card-subtitle mb-2 text-muted">{code}</h6>

                    <Link to={`/detalle/${asset_id}`} className="btn btn-info">
                      Detalles
                    </Link>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => {
                        eliminar(asset_id);
                      }}
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              );
            })}
          </ul> */}
        </div>
      </div>
    </>
  );
};
