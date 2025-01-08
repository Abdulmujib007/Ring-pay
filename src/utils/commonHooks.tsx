import { useSelector } from "react-redux";

export const useAuthUser = () => {
    const appReducer : any = useSelector<any>((state) => state.persistAuthReducer)
    return {
        user : appReducer.user,
        token : appReducer.accessToken,
        isLoggedIn : appReducer.accessToken && appReducer.user
    }
}