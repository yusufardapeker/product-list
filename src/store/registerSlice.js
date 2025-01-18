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
	},
});

export const { setUserData } = registerSlice.actions;

export default registerSlice.reducer;
