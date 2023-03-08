import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useAppDispatch } from "../../hooks/useTypedSelector";
import { logoutUser } from "../../store/slices/userSlice";



function SwitchLogin() {
   const { t } = useTranslation<string>();
   const {isLogin} = useAuth();
   const dispatch = useAppDispatch();

  const handleLogout = () =>{
    window.localStorage.removeItem('isLogin');
    dispatch(logoutUser())
  }

  return (
    <>
    {
        isLogin ?
        <Button onClick={handleLogout} color={"inherit"}>{t("logout")}</Button>
        :
        <Link  to={'/news-task/login'} style={{textDecoration:'none', color:"#fff"}}>{t("login")}</Link>
    }
    
    </>
  );
}

export default SwitchLogin;
