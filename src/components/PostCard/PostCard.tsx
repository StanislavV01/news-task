import {  Grid, Skeleton } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { FC } from 'react';
import { Post } from '../../types/Post';

 
interface IPostProps {
  post:Post
  loading:boolean
}

const PostCard: FC<IPostProps> = ({post, loading}): JSX.Element =>{
  const {title, body} = post;

  return  <Grid item xs={2} sm={4} md={4} key={post.id}>
     <CardContent sx={{background:"#fff", maxHeight:270, display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
      <Typography  color="primary"  variant='h3'>
        {loading ? <Skeleton variant="text" sx={{ fontSize: '1rem' }} /> : title}
      </Typography>

      <Typography variant="h6">
          {loading ? <Skeleton variant="rectangular" width={210} height={60} /> : body}
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
  
      </Grid>
}

export default PostCard;
