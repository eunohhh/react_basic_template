import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
    students: [{ name: "kim" }, { name: "oh" }],
};

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state, action) => {
            state.count = state.count + action.payload;
        },
        decrement: (state, action) => {
            state.count = state.count - action.payload;
        },
        addStudent: (state, action) => {
            state.students.push({ name: action.payload });
        },
        delStudent: (state, action) => {
            state.students = state.students.filter(
                (student) => student.name !== action.payload
            );
        },
    },
});

export const { increment, decrement, addStudent, delStudent } =
    counterSlice.actions;

export const counterReducer = counterSlice.reducer;
export default counterReducer;
