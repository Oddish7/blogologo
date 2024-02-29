import { Action, ThunkAction, combineReducers, configureStore } from "@reduxjs/toolkit"
import { searchReducer } from "./search/reducer"
import { authReducer } from "./auth/reducer"
import { profileReducer } from "./profile/reducer"
import { addToFavsReducer } from "./favs/reducer"
import { likeReducer } from "./likes/reducer"
import { editPostReducer } from "./edit/reducer"
import { imageReducer } from "./postImage/reducer"
import { postReducer } from "./posts/reducer"
import { addPostReducer } from "./addPost/reducer"
import { tabReducer } from "./tabs/reducer"
import { themeReducer } from "./theme/reducer"
import { signUpReducer } from "./signUp/reducer"
import { activationReducer } from "./activation/reducer"
import { resetPasswordReducer } from "./reset_passwd/reducer"

const rootReducer = combineReducers({
    search: searchReducer,
    auth: authReducer,
    profile: profileReducer,
    favs: addToFavsReducer,
    like: likeReducer,
    edit: editPostReducer,
    openPostImage: imageReducer,
    posts: postReducer,
    addPost: addPostReducer,
    tabs: tabReducer,
    theme: themeReducer,
    resetPassword: resetPasswordReducer,
    activation: activationReducer,
    signUp: signUpReducer,

})

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
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