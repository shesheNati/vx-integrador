import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../ui";

import {
  Home,
  Detalles,
  AddEmpleado,
  EditEmpleado,
} from "../empleados/paginas";

import {
  HomeAsset,
  CreateAsset,
  UpdateAsset, 
  DetalleAsset
} from "../assets/paginas";

export const AppRouter = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="/home" element={<Home />} />
          

          {/* rutas para empleados*/}
          
          <Route path="/add" element={<AddEmpleado />} />

          <Route path="/edit/:employeesId" element={<EditEmpleado />} />

          <Route path="/detail/:employeesId" element={<Detalles />} />

          {/* rutas para assets*/}

          <Route path="/homeAsset" element={<HomeAsset />} />
          
          <Route path="/create" element={<CreateAsset />} />

          <Route path="/update/:assetsId" element={<UpdateAsset />} />

          <Route path="/detalle/:assetsId" element={<DetalleAsset />} />


          <Route path="/" element={<Navigate to="/home" />} />

          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </div>
    </>
  );
};
