import { Box, Skeleton } from "@mui/material";
import { Navigate } from "react-router-dom";
import PageTitle from "../components/PageTitle/PageTitle";
import { useAuth } from "../hooks/useAuth";

function Profile() {
  const { isLogin } = useAuth()

  return (
    <>
      {!isLogin && <Navigate to='/news-task' />}
      <PageTitle title='Profile Page' />
      <Box sx={{ maxWidth: 200 }}>
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="rectangular" width={210} height={60} />
        <Skeleton variant="rounded" width={210} height={60} />
      </Box>
    </>
  );
}

export default Profile;
