import { useSelector } from "react-redux";
import { AppState } from "../store";

export const useMoreState = (id: string) => {
    const selector = useSelector(
        (globalState: AppState) => globalState.more[id]
    )
    return selector
}