import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

export const Detalles = () => {
  const { employeesId } = useParams();

  const { employees } = useSelector((state) => state.employees);

  const employee = employees.find((employee) => {
    return employee.employee_id == employeesId;
  });

  return (
    <>
      <div>
        <div>
          <h1>Detalles</h1>
          <ul>
            {employee ? (
              <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">
                    {employee.firstname} {employee.lastname}
                  </h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {employee.email}
                  </h6>
                  <p className="card-text">Telefono: {employee.phone_number}</p>
                  <p className="card-text">
                    Fecha de contratacion: {employee.hire_date}
                  </p>
                  <p className="card-text">Salario: {employee.salary}</p>
                  <p className="card-text">
                    Comision: {employee.comission_pct}
                  </p>
                  <p className="card-text">Id: {employee.id}</p>

                  <Link
                    to={`/edit/${employee.employee_id}`}
                    className="btn btn-info"
                  >
                    Editar
                  </Link>
                </div>
              </div>
            ) : (
              <h1>Empleado no encontrado con id {employeesId}</h1>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};
