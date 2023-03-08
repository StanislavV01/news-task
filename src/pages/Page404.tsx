import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";

function Page404() {
  return <>
  <ErrorMessage message={'Page Not Found'}>
    <Typography variant="h3" component={'h3'} textAlign='center'>404</Typography>
    <Link to='/news-task'>Back to Home</Link>
  </ErrorMessage>
  </>
}

export default Page404;
