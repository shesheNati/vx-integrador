import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { actionUpdateAssets } from "../../store/slices/assets/thunks";

export const UpdateAsset = () => {
  const { assetsId } = useParams();
  const navigate = useNavigate();

  const { assets } = useSelector((state) => state.assets);

  const asset = assets.find((asset) => {
    return asset.asset_id == assetsId;
  });

  const dispatch = useDispatch();

  const [activo, setAssets] = useState({
    // id: employee.id,
    employee_id: asset.employee_id,
    type: asset.type,
    code: asset.code,
    marca: asset.marca,
    description: asset.description,
    purchase_date: asset.purchase_date,
  });

  console.log(asset);

  const handleChange = (e) => {
    setAssets({
      ...activo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(actionUpdateAssets(assetsId, activo, navigate));
    console.log(activo);
    // navigate("/home");
  };

  const handleCancel = () => {
    navigate("/update/" + assetsId);
  };

  return (
    <form style={{ width: 500 }}>
      <div className="mb-3">
        <label for="first_name" className="form-label">
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
      </div>
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
        <label for="cuit" className="form-label">
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
        <label for="rol" className="form-label">
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
        Editar
      </button>
      <button onClick={handleCancel} className="btn btn-warning">
        Cancelar
      </button>
    </form>
  );
};
