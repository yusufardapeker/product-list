import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	name: "",
	surname: "",
	city: "",
	country: "",
};

export const registerSlice = createSlice({
	name: "register",
	initialState,
	reducers: {
		setUserData: (state, action) => {
			const { name, value } = action.payload;
			state[name] = value;
		},
		resetUserData: (state) => {
			state.name = "";
			state.surname = "";
			state.city = "";
			state.country = "";
		},
	},
});

export const { setUserData, resetUserData } = registerSlice.actions;

export default registerSlice.reducer;
