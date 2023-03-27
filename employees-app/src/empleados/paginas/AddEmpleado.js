import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { actionAddEmployees } from "../../store/slices/employees";
// import { addEmployee } from "../../store/slices/employees/employeesSlice";

export const AddEmpleado = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [empleado, setEmpleado] = useState({
    // employee_id: "",
    first_name: "",
    last_name: "",
    join_date: "",
    cuit: "",
    rol: "",
    team_id: "",

    // id: Date.now(), //te devuelva la fecha actual
    // firstname: "",
    // lastname: "",
    // email: "",
    // phone_number: "",
    // hire_date: "",
    // salary: "",
    // commission_pct: "",
  });

  const handleChange = (e) => {
    setEmpleado({
      ...empleado,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(actionAddEmployees(empleado, navigate));
    // dispatch(addEmployee(empleado));
    // console.log(empleado);
    // navigate("/home");
    console.log("handlet submit");
  };

  return (
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
        <label for="last_name" className="form-label">
          Apellidos:
        </label>
        <input
          name="last_name"
          onChange={handleChange}
          value={empleado.last_name}
          type="text"
          className="form-control"
          id="last_name"
          aria-describedby="emailHelp"
          required
        />
      </div>
      <div className="mb-3">
        <label for="cuit" className="form-label">
          Cuit:
        </label>
        <input
          name="cuit"
          onChange={handleChange}
          value={empleado.cuit}
          placeholder="25-34067463-5"
          type="text"
          className="form-control"
          id="cuit"
          required
          // aria-describedby="emailHelp"
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
          // aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label for="join_date" className="form-label">
          Fecha de Contratacion:
        </label>
        <input
          name="join_date"
          onChange={handleChange}
          value={empleado.join_date}
          type="date"
          className="form-control"
          id="join_date"
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
      {/* <div className="mb-3">
        <label for="commission_pct" className="form-label">
          Comision:
        </label>
        <input
          name="commission_pct"
          onChange={handleChange}
          value={empleado.commission_pct}
          type="text"
          className="form-control"
          id="commission_pct"
          aria-describedby="emailHelp"
        />
      </div> */}
      <button type="submit" onClick={handleSubmit} className="btn btn-primary">
        Guardar
      </button>
    </form>
  );
};
