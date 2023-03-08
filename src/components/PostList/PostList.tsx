import { Box, Button, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../hooks/useTypedSelector";
import { getPosts } from "../../store/slices/postSlice";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import PostCard from "../PostCard/PostCard";



function PostList() {
const [limit, setLimit] = useState(9)
const  dispatch = useAppDispatch();
const {t} = useTranslation();
useEffect(()=>{
    dispatch(getPosts(limit))
}, [dispatch, limit])

const {loading,data, error} = useAppSelector(state=>state.posts)

  return (
    <Box display={'flex'} flexDirection='column'>
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {   
            error ? <ErrorMessage message="Something went wrong!Please try again"/> :
            data?.map(post=><PostCard post={post} key={post.id}  loading={loading}/>)
        }

    </Grid>
    <Button variant="contained"
         onClick={()=>setLimit(limit=>limit+9)}
          sx={{
            margin:'20px auto'
          }}
          disabled={loading}
        >{t('load-more')}</Button>
    </Box>)
}

export default PostList;
