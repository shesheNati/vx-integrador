import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { actionCreateAssets } from "../../store/slices/assets/thunks";

export const CreateAsset = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { employees } = useSelector((state) => state.employees);
  console.log(employees);

  const [activo, setAssets] = useState({
    // employee_id: "",
    employee_id: "",
    name:"",
    type: "",
    code: "",
    marca: "",
    description: "",
    purchase_date: "",
  });

  const handleChange = (e) => {
    setAssets({
      ...activo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(actionCreateAssets(activo, navigate));

    console.log("handlet submit");
  };

  const handleChangeSelect = (e) => {
    console.log("Fruit Selected!!");
    console.log(e.target.value);
    setAssets({ ...activo, employee_id: e.target.value });
  };
  return (
    <form style={{ width: 500 }}>
      {/* <div className="mb-3"> */}
      <select
        onChange={handleChangeSelect}
        className="custom-select custom-select-lg mb-3"
      >
        <option selected>Seleccionar un empleado</option>
        {employees.map(({ employee_id, first_name, last_name }) => {
          return (
            <option value={employee_id}>
              {first_name} {last_name}
            </option>
          );
        })}
      </select>

      {/* <label for="employee_id" className="form-label">
          empleado id:
        </label>
        <input
          name="employee_id"
          onChange={handleChange}
          value={activo.employee_id}
          type="text"
          className="form-control"
          id="employee_id"
          required
          aria-describedby="emailHelp"
        />
      </div> */}
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

      <div className="mb-3">
        <label for="code" className="form-label">
          codigo:
        </label>
        <input
          name="code"
          onChange={handleChange}
          value={activo.code}
          type="number"
          className="form-control"
          id="code"
          required
          // aria-describedby="emailHelp"
        />
      </div>

      <div className="mb-3">
        <label for="marca" className="form-label">
          marca:
        </label>
        <input
          name="marca"
          onChange={handleChange}
          value={activo.marca}
          type="text"
          className="form-control"
          id="marca"
          aria-describedby="emailHelp"
        />
      </div>

      <div className="mb-3">
        <label for="description" className="form-label">
          descripcion:
        </label>
        <input
          name="description"
          onChange={handleChange}
          value={activo.description}
          type="text"
          className="form-control"
          id="description"
          aria-describedby="emailHelp"
        />
      </div>

      <div className="mb-3">
        <label for="purchase_date" className="form-label">
          Fecha de Contratacion:
        </label>
        <input
          name="purchase_date"
          onChange={handleChange}
          value={activo.purchase_date}
          type="date"
          className="form-control"
          id="purchase_date"
          aria-describedby="emailHelp"
        />
      </div>

      <button type="submit" onClick={handleSubmit} className="btn btn-primary">
        Guardar
      </button>
    </form>
  );
};
