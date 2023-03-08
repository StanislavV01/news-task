import { Box, } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../hooks/useAuth";
import NavItem from "./NavItem";

type NavigationProps = {
    color?:string,
    isMobile?:boolean
}


function Navigation({color, isMobile}:NavigationProps) {
    const {isLogin} = useAuth();
    const { t } = useTranslation<string>();

    return <Box display={'flex'} flexDirection={`${ isMobile ? 'column':'row'}`}>
                <NavItem link='/news-task' title={t('home')} color={color}/>
                <NavItem link='/news-task/news' title={t('news')} color={color}/>
        {isLogin && <NavItem link='/news-task/profile' title={t('profile')} color={color}/>}


    </Box>;
}

export default Navigation;
