import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@material-ui/core/Button';


export default function ImageCard(props) {
  const getRandom = (min: number = 0, max: number = 1000) => {
    var random = "https://source.unsplash.com/user/i14nakatukasa"
    //var random = Math.floor(Math.random() * (max + 1 - min)) + min;
    return random;
  }

  const fetchImage = async () => {
    const res = await fetch("https://source.unsplash.com/user/i14nakatukasah");
    const result = await res.json();
    return result.urls.full;
  };

  return (
    <Card
      // sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}

      sx={{ height: '100%', minWidth: 100, p: 2, borderRadius: 2, display: 'flex', flexDirection: 'column' }}
    >
      <CardMedia
        component="img"
        sx={{
          // 16:9
          pt: '10%',
        }}
        image={ props.image.urls.small }
        alt="random"
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
          { props.image.description }
        </Typography>
        <Typography>
          { props.image.alt_description }
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View</Button>
        <Button size="small">Edit</Button>
      </CardActions>
    </Card>
  )
}