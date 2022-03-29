import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Actividades(props) {
  return (
    <Card className='cardActiv'  sx={{ maxWidth: 300 }}>
        <Typography gutterBottom variant="h5" component="div">
          {props.activity.title}
          </Typography>
      <CardActionArea>
        <CardMedia
          component="img"
          height="170"
          image={props.activity.imageUrl}
          alt="green iguana"
        />
        <CardContent >
          
          <Typography variant="body2" color="white"  >
          {props.activity.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}


// color="text.secondary"