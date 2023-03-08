import { Box, Typography } from "@mui/material";


type PageTitleProps = {
    title :string
}

function PageTitle({title}:PageTitleProps) {
  return <Box sx={{margin:'20px 0 40px 0'}}>
    <Typography variant="h3" component={'h1'}>{title}</Typography>
  </Box>
}

export default PageTitle;
