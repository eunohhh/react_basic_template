import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice/counter.slice";

// 1. slice 생성 `createSlice({ options })`
// 2. store 생성 `configureStore({ options })`
// 3. Provider 로 상위 컴포넌트 감싸기
// 4. 사용할 컴포넌트에서 사용 `useDispatch(), useSelector, actions`

const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});

export default store;
