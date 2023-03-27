import {
  startLoadingAssets,
  setAssets,
  createAsset,
  updateAsset,
  deleteAsset,
} from "./assetsSlice";

export const getAllAssets = (activo = {}) => {
  return async (dispatch, getState) => {
    console.log("assets thunks");
    dispatch(startLoadingAssets());

    let query = "?" 
    if(activo.name){
      query += `name=${activo.name}&`
    }

    if(activo.type){
      query += `type=${activo.type}&`
    }



    const resp = await fetch(`http://localhost:8080/api/v1/asset${query}`);

    const data = await resp.json();
    console.log(data);
    const assets = data.data;
    dispatch(setAssets(assets));
  };
};

export const actionCreateAssets = (activo, navigate) => {
  return async (dispatch, getState) => {
    // dispatch(startLoadingEmployees());
    // const resp = await fetch(
    //     `http://localhost:8080/api/v1/employee`
    //   );

    // const data = await resp.json();
    // console.log(data)
    // const employees = data.data;
    // dispatch(setEmployees(employees));

    console.log("action creater asset");
    console.log(activo);
    const url = "http://localhost:8080/api/v1/asset";

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
      body: JSON.stringify(activo), // body data type must match "Content-Type" header
    });
    const respuesta = await response.json();
    console.log(respuesta);
    console.log("respuesta.data");
    console.log(respuesta.data);
    if (respuesta.data) {
      dispatch(createAsset(respuesta.data));
      navigate("/homeAsset");

      // functioNavegarHome()
    }
  };
};

export const actionUpdateAssets = (id, activo, navigate) => {
  return async (dispatch, getState) => {
    console.log(id);

    const url = `http://localhost:8080/api/v1/asset/${id}`;

    const response = await fetch(url, {
      method: "PUT",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(activo),
    });
    const respuesta = await response.json();
    console.log("respuesta.data");
    console.log(respuesta);

    if (respuesta.asset) {
      dispatch(updateAsset(respuesta.asset));
      navigate("/homeAsset");
    }
  };
};

export const actionDeleteAssets = (id, Swal) => {
  return async (dispatch, getState) => {
    console.log(id);

    const url = `http://localhost:8080/api/v1/asset/${id}`;

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
        text: "Asset eliminado!",
      });
      dispatch(deleteAsset(id));
    }
  };
};
