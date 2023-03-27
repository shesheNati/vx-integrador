import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { actionDeleteEmployees, getEmployees } from "../../store/slices/employees/thunks";

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

 


  const [empleado, setEmpleado] = useState({
    // employee_id: "",
    first_name: "",
    team_id: "",
    rol: "",
   
   
  });

  const handleChange = (e) => {
    setEmpleado({
      ...empleado,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(actionAddEmployees(empleado, navigate));
    // dispatch(addEmployee(empleado));
    // console.log(empleado);
    // navigate("/home");
    console.log(empleado)
    console.log("handlet submit");
    dispatch(getEmployees(empleado));
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

          <form style={{ width: 500 }}>
            <div className="mb-3">
              <label for="first_name" className="form-label">
                Primer nombre:
              </label>
              <input
                name="first_name"
                onChange={handleChange}
                value={empleado.first_name}
                type="text"
                className="form-control"
                id="first_name"
                required
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
        <label for="team_id" className="form-label">
          Equipo Id:
        </label>
        <input
          name="team_id"
          onChange={handleChange}
          value={empleado.team_id}
          type="number"
          className="form-control"
          id="team_id"
          aria-describedby="emailHelp"
        />
      </div>
            
            <div className="mb-3">
              <label for="rol" className="form-label">
                Rol:
              </label>
              <input
                name="rol"
                onChange={handleChange}
                value={empleado.rol}
                type="text"
                className="form-control"
                id="rol"
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
                <th scope="col">Id</th>
                <th scope="col">Nombre y Apellido</th>
                <th scope="col">Cuit</th>
                <th scope="col">Equipo Id</th>
                <th scope="col">Rol</th>
                <th scope="col">Opciones</th>
              </tr>
            </thead>
            <tbody>
              {employees.map(({ employee_id, first_name, last_name, cuit, rol, team_id }) => {
                return (
                  <tr>
                    <th scope="row">{employee_id}</th>
                    <td>
                      {first_name} {last_name}
                    </td>
                    <td>{cuit}</td>
                    <td>{team_id}</td>
                    <td>{rol}</td>
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
  
        </div>
      </div>
    </>
  );
};
