import { Copyright } from "@mui/icons-material";
import { Container, Typography } from "@mui/material";




const Footer = () =>{

return(
        <Container maxWidth="lg" sx={{display:'flex', flexDirection:'column',alignItems:'center', margin:'20px auto'}}>
                <Typography variant="h6" align="center" gutterBottom>
                        My test website footer
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                        Something here to give the footer a purpose!
                </Typography>
                <Copyright />
        </Container>
)
}

export default Footer;
