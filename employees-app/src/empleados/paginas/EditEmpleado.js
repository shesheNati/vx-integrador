import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { actionUpdateEmployees } from "../../store/slices/employees";

export const EditEmpleado = () => {
  const { employeesId } = useParams();
  const navigate = useNavigate();

  const { employees } = useSelector((state) => state.employees);

  const employee = employees.find((employee) => {
    return employee.employee_id == employeesId;
  });

  const dispatch = useDispatch();

  const [empleado, setEmpleado] = useState({
    // id: employee.id,
    first_name: employee.first_name,
    last_name: employee.last_name,
    join_date: employee.join_date,
    cuit: employee.cuit,
    rol: employee.rol,
    team_id: employee.team_id,
  });

  console.log(employee);

  const handleChange = (e) => {
    setEmpleado({
      ...empleado,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(actionUpdateEmployees(employeesId, empleado, navigate));
    console.log(empleado);
    // navigate("/home");
  };

  const handleCancel = () => {
    navigate("/detail/" + employeesId);
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

      <button type="submit" onClick={handleSubmit} className="btn btn-primary">
        Editar
      </button>
      <button onClick={handleCancel} className="btn btn-warning">
        Cancelar
      </button>
    </form>
  );
};
