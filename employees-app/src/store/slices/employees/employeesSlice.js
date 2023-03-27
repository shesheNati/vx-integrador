import { createSlice } from "@reduxjs/toolkit";

export const employeesSlice = createSlice({
  name: "employees",
  initialState: {
    filter: "All",
    employees: [],
    isLoading: false,
  },
  reducers: {
    startLoadingEmployees: (state /* action */) => {
      state.isLoading = true;
    },

    setEmployees: (state, action) => {
      state.employees = action.payload;
    },

    addEmployee: (state, action) => {
      console.log(action);
      state.employees = [...state.employees, action.payload];
    },

    editEmployee: (state, action) => {
      state.employees = state.employees.map((empleado) => {
        if (empleado.employee_id == action.payload.employee_id) {
          empleado = action.payload;
        }
        return empleado;
      });
    },

    deleteEmployee: (state, action) => {
      state.employees = state.employees.filter((empleado) => {
        if (empleado.employee_id == action.payload) {
          console.log("coincide, eliminar");
        } else {
          console.log("no coincide, no eliminar.Retornar");
          return empleado;
        }

        // if (empleado.id != action.payload) {
        //   return empleado;
        // }
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  startLoadingEmployees,
  setEmployees,
  addEmployee,
  editEmployee,
  deleteEmployee,
} = employeesSlice.actions;
