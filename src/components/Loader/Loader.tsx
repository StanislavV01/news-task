import { Box, CircularProgress } from "@mui/material";

function Loader() {
  return <Box display={'flex'} justifyContent={'center'} alignItems={'center'} width='100%'><CircularProgress  size={150} /></Box>;
}

export default Loader;
