import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	userData: {},
	isRegistered: false,
	discountRate: 0.15,
};

export const registerSlice = createSlice({
	name: "register",
	initialState,
	reducers: {
		setUserData: (state, action) => {
			state.userData = action.payload;
		},

		setRegisterSuccess: (state) => {
			state.isRegistered = true;
		},
	},
});

export const { setUserData, setRegisterSuccess } = registerSlice.actions;

export default registerSlice.reducer;
