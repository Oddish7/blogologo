import { useSelector } from "react-redux";
import { AppState } from "../store";


export const useAuthState = () => {
    const selector = useSelector(
        (globalState: AppState) => globalState.auth
    )
    return selector
}