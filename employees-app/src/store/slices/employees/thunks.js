import { resetByEmployeeId } from "../assets/assetsSlice";
import {
  startLoadingEmployees,
  setEmployees,
  addEmployee,
  deleteEmployee,
  editEmployee,
} from "./employeesSlice";
//import dataJson from '../../../employees.json';

export const getEmployees = () => {
  return async (dispatch, getState) => {
    dispatch(startLoadingEmployees());
    const resp = await fetch(`http://localhost:8080/api/v1/employee`);

    const data = await resp.json();
    console.log(data);
    const employees = data.data;
    dispatch(setEmployees(employees));
  };
};

export const actionAddEmployees = (empleado, navigate) => {
  return async (dispatch, getState) => {
    // dispatch(startLoadingEmployees());
    // const resp = await fetch(
    //     `http://localhost:8080/api/v1/employee`
    //   );

    // const data = await resp.json();
    // console.log(data)
    // const employees = data.data;
    // dispatch(setEmployees(employees));

    console.log("action creater");
    console.log(empleado);
    const url = "http://localhost:8080/api/v1/employee";

    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      // mode: "cors", // no-cors, *cors, same-origin
      // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      // redirect: "follow", // manual, *follow, error
      // referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(empleado), // body data type must match "Content-Type" header
    });
    const respuesta = await response.json();
    console.log("respuesta.data");
    console.log(respuesta.data);
    if (respuesta.data) {
      dispatch(addEmployee(respuesta.data));
      navigate("/home");

      // functioNavegarHome()
    }
  };
};

export const actionUpdateEmployees = (id, empleado, navigate) => {
  return async (dispatch, getState) => {
    console.log(id);

    const url = `http://localhost:8080/api/v1/employee/${id}`;

    const response = await fetch(url, {
      method: "PUT",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(empleado),
    });
    const respuesta = await response.json();
    console.log("respuesta.data");
    console.log(respuesta);

    if (respuesta.employee) {
      dispatch(editEmployee(respuesta.employee));
      navigate("/home");
    }
  };
};

export const actionDeleteEmployees = (id, Swal) => {
  return async (dispatch, getState) => {
    console.log(id);

    const url = `http://localhost:8080/api/v1/employee/${id}`;

    const response = await fetch(url, {
      method: "DELETE",
    });
    const respuesta = await response.json();
    console.log("respuesta.data");
    console.log(respuesta);

    if (respuesta.ok == true) {
      Swal.fire({
        icon: "success",
        title: "Ok",
        text: "Empleado eliminado!",
      });
      dispatch(deleteEmployee(id));
      dispatch(resetByEmployeeId(id));
    }
  };
};
