
import { Box } from '@mui/material';
import PageTitle from '../components/PageTitle/PageTitle';
import PostList from '../components/PostList/PostList';



export default function News() {

  return (
    <Box display='flex' flexDirection='column' alignItems={'center'}>
    <PageTitle title='TypicJSON Posts'/>
    <PostList/>
    </Box>
  )
}


