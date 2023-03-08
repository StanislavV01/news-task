import { Box, Button, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../hooks/useTypedSelector";
import { getNews } from "../../store/slices/newsSlice";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";
import NewsCard from "../NewsCard/NewsCard";



function NewsList() {
  const [size, setSize] = useState(12)
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  useEffect(() => {
    dispatch(getNews(size))
  }, [dispatch, size])

  const { loading, data, error } = useAppSelector(state => state.news)

  return (
    <Box display={'flex'} flexDirection='column'>
      <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 3, sm: 8, md: 12 }}>
        {
          error ? <ErrorMessage message="Something went wrong!Please try again" /> :
            data?.map(news => <NewsCard news={news} key={news.publishedAt} loading={loading} />)
        }
        {
          loading && <Loader />
        }
      </Grid>
      <Button variant="contained"
        onClick={() => setSize(size => size + 9)}
        sx={{
          margin: '20px auto'
        }}
        disabled={loading}
      >{t('load-more')}</Button>
    </Box>)
}

export default NewsList;
