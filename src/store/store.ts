import { Action, ThunkAction, combineReducers, configureStore } from "@reduxjs/toolkit"
import { searchReducer } from "./search/reducer"
import { authReducer } from "./auth/reducer"
import { profileReducer } from "./profile/reducer"

const rootReducer = combineReducers({
    search: searchReducer,
    auth: authReducer,
    profile: profileReducer,
})

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()//add concat to use other features
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppState,
    unknown,
    Action<string>
>

export {
    store as appStore
}