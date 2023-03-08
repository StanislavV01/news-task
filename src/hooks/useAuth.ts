import { useAppSelector } from "./useTypedSelector";

export const useAuth = () => {
    const { isLogin } = useAppSelector(state => state.user)
    return {
        isLogin
    }

}