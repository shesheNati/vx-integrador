import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

export const DetalleAsset = () => {
  const { assetsId } = useParams();

  const { assets } = useSelector((state) => state.assets);

  const asset = assets.find((asset) => {
    return asset.asset_id == assetsId;
  });

  return (
    <>
      <div>
        <div>
          <h1>Detalles</h1>
          <ul>
            {asset ? (
              <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">
                    {asset.firstname} {asset.lastname}
                  </h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {asset.email}
                  </h6>
                  <p className="card-text">Telefono: {asset.phone_number}</p>
                  <p className="card-text">
                    Fecha de contratacion: {asset.hire_date}
                  </p>
                  <p className="card-text">Salario: {asset.salary}</p>
                  <p className="card-text">Comision: {asset.comission_pct}</p>
                  <p className="card-text">Id: {asset.id}</p>

                  <Link
                    to={`/update/${asset.asset_id}`}
                    className="btn btn-info"
                  >
                    Editar
                  </Link>
                </div>
              </div>
            ) : (
              <h1>Activo no encontrado con ese id {assetsId}</h1>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};
