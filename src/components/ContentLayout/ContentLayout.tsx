import { Box } from '@mui/material'
import { ReactElement, ReactFragment, ReactPortal } from 'react';


interface IContentProps {
    children: ReactElement | ReactFragment | ReactPortal | null | undefined;
}

export default function ContentLayout({ children }: IContentProps) {
    return <Box sx={{padding:'10px 40px', margin:"0 auto"}}>
        {
            children
        }
    </Box>;
}
