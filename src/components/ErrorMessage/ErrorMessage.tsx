import { Box } from '@mui/material';
import ErrorGif from '../../assets/images/error.gif'
import PageTitle from '../PageTitle/PageTitle';

type ErrorMessageProps = {
    message:string,
    children? : JSX.Element | React.ReactNode | React.ReactElement | null;
}


function ErrorMessage({message, children}:ErrorMessageProps) {
  return <Box  display={'flex'} flexDirection={'column'} alignItems='center'>
            <PageTitle title={message}/>
            <img src={ErrorGif} alt="error" />
                {
                    children
                }
  </Box>;
}

export default ErrorMessage;
