import { useSelector } from "react-redux";
import { AppState } from "../store";


export const useAddPostState = () => {
    const selector = useSelector(
        (globalState: AppState) => globalState.addPost
    )
    return selector
}