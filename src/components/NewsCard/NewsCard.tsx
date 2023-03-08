import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {  CardActionArea, CardActions, Grid, Skeleton} from '@mui/material';
import { Link } from 'react-router-dom';
import { News } from '../../types/News';
import BaseImage from '../../assets/images/imageNews.jpg'
import { useTranslation } from 'react-i18next';



interface INewsCardProps {
  news:News,
  loading:boolean,
}


 function  NewsCard  ({news, loading}:INewsCardProps) {
  const {t} = useTranslation();

  return (
    <Grid item xs={3} sm={4} md={3} key={news.publishedAt} >
    <Card sx={{ maxWidth: 345, maxHeight:330, height:'100%' }}>
      <CardActionArea sx={{display:'flex', flexDirection:"column", justifyContent:'space-between'}}>
        <CardMedia
          component="img"
          height="140"
          src={`${news.urlToImage ? news.urlToImage :BaseImage}`}
          alt={news.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
             { loading ? <Skeleton variant="rectangular" width={210} height={60} /> :news.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" maxHeight={50}>
        {news.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
     {
     loading ? <Skeleton variant="text" sx={{ fontSize: '1rem' }} /> :
      <Link to={`${news.url}`} style={{textDecoration:'none', fontSize:'16px', fontWeight:'bold'}}>
      {t("read-more")}
      </Link>
      }

      </CardActions>
    </Card>
    </Grid>
  );
}
export default NewsCard;