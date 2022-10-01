import { createSlice } from "@reduxjs/toolkit";
import { GetCharactersList_characters_results } from "../../queries/__generated__/GetCharactersList";

interface IInitialState {
  ids: Array<GetCharactersList_characters_results["id"]>;
  data: Record<PropertyKey, GetCharactersList_characters_results>;
}

const INITIAL_STATE: IInitialState = {
  ids: [],
  data: {},
};

export const homeSlice = createSlice({
  name: "home",
  initialState: INITIAL_STATE,
  reducers: {
    setItems: (state, action) => {
      const { payload } = action;
      return {
        ...state,
        ids: payload.ids,
        data: payload.data,
      };
    },
  },
});

export const { setItems } = homeSlice.actions;

export default homeSlice.reducer;
