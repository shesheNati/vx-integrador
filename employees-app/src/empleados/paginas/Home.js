import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { actionDeleteEmployees } from "../../store/slices/employees/thunks";

import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";

export const Home = () => {
  // esto es para traer del store informacion los empleados
  const { employees } = useSelector((state) => state.employees);
  const dispatch = useDispatch();

  const eliminar = (id) => {
    Swal.fire({
      title: "Desea eliminar este empleado?",

      showCancelButton: true,
      confirmButtonText: "Eliminar",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        dispatch(actionDeleteEmployees(id, Swal));
        // Swal.fire("Saved!", "", "success");
      }
    });
  };

  return (
    <>
      <div>
        <div>
          {employees.length == 0 ? (
            <h1> No hay empleados</h1>
          ) : (
            <h1>Listado de empleados</h1>
          )}

          <table class="table">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Nombre y Apellido</th>
                <th scope="col">Cuit</th>
                <th scope="col">Opciones</th>
              </tr>
            </thead>
            <tbody>
              {employees.map(({ employee_id, first_name, last_name, cuit }) => {
                return (
                  <tr>
                    <th scope="row">{employee_id}</th>
                    <td>
                      {first_name} {last_name}
                    </td>
                    <td>{cuit}</td>
                    <td>
                      <Link
                        to={`/edit/${employee_id}`}
                        className="btn btn-info"
                      >
                        Editar
                      </Link>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => {
                          eliminar(employee_id);
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
            {employees.map(({ employee_id, first_name, last_name, cuit }) => {
              return (
                <div className="card" style={{ width: "18rem" }}>
                  <div key={employee_id} className="card-body">
                    <h5 className="card-title">
                      {first_name} {last_name}
                    </h5>
                    <h6 className="card-subtitle mb-2 text-muted">{cuit}</h6>

                    <Link
                      to={`/detail/${employee_id}`}
                      className="btn btn-info"
                    >
                      Detalles
                    </Link>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => {
                        eliminar(employee_id);
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
