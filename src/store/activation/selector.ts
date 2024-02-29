import { useSelector } from "react-redux"
import { AppState } from "../store"

export const useActivationState = () => {
    const selector = useSelector(
        (globalState: AppState) => globalState.activation
    )
    return selector
}