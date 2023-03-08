import { Box, CircularProgress } from "@mui/material";

function Loader() {
  return <Box display={'flex'} justifyContent={'center'} alignItems={'center'}><CircularProgress  size={150} /></Box>;
}

export default Loader;
