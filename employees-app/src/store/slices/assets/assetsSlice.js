import { createSlice } from "@reduxjs/toolkit";

export const assetsSlice = createSlice({
  name: "assets",
  initialState: {
    filter: "All",
    assets: [],
    isLoading: false,
  },
  reducers: {
    startLoadingAssets: (state /* action */) => {
      state.isLoading = true;
    },

    setAssets: (state, action) => {
      state.assets = action.payload;
    },

    createAsset: (state, action) => {
      console.log(action);
      state.assets = [...state.assets, action.payload];
    },

    updateAsset: (state, action) => {
      state.assets = state.assets.map((activo) => {
        if (activo.asset_id == action.payload.asset_id) {
          activo = action.payload;
        }
        return activo;
      });
    },

    deleteAsset: (state, action) => {
      state.assets = state.assets.filter((activo) => {
        if (activo.asset_id == action.payload) {
          console.log("coincide, eliminar");
        } else {
          console.log("no coincide, no eliminar.Retornar");
          return activo;
        }
      });
    },

    resetByEmployeeId: (state, action) => {
      state.assets = state.assets.map((activo) => {
        if (activo.employee_id == action.payload) {
          activo.employee_id = 0;
        }
        return activo;
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  startLoadingAssets,
  setAssets,
  createAsset,
  updateAsset,
  deleteAsset,
  resetByEmployeeId,
} = assetsSlice.actions;
