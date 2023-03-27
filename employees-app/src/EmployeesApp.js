import { AppRouter } from "./router/AppRouter";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { getEmployees } from "./store/slices/employees";
import { getAllAssets } from "./store/slices/assets";


export const EmployeesApp = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEmployees());
  }, []);

  useEffect(() => {
    dispatch(getAllAssets());
  }, []);

  return (
    <div className="row rows-col-1 row-col-md-3 g-3">
      <>
        
        <AppRouter />
      </>
    </div>
  );
};
