import { useSelector } from "react-redux"
import { AppState } from "../store"

export const useProfileState = () => {
    const selector = useSelector(
        (globalState: AppState) => globalState.profile
    )
    return selector
}