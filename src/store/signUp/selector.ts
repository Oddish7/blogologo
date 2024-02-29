import { useSelector } from "react-redux"
import { AppState } from "../store"
export const useSignUpState = () => {
    const selector = useSelector(
        (globalState: AppState) => globalState.signUp
    )
    return selector
}


