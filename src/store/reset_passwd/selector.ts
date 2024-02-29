import { useSelector } from "react-redux"
import { AppState } from "../store"

export const useResetPasswordState = () => {
    const selector = useSelector(
        (globalState: AppState) => globalState.resetPassword
    )
    return selector
}