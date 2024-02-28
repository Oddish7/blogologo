import { useSelector } from "react-redux";
import { AppState } from "../store";


export const useEditPostState = () => {
    const selector = useSelector(
        (globalState: AppState) => globalState.edit
    )
    return selector
}