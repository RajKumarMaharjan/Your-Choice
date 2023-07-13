import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard(props) {
  const itemId = props.item['_id'];
  const imageUrl = itemId
    ? `http://localhost:8080/item-image/${itemId}`
    : '';
 
  return (
    <div>
      <Card sx={{ maxWidth: 300, maxHeight: 400}}>
        <img
          src={imageUrl}
          width={280}
          height={300}
          alt={props.item['Item Name']}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.item['Item Name']}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <ul>
              <li>{props.item['Item Color']}</li>
              <li>{props.item['Item Brand']}</li>
              <li>{props.item['Item Description']}</li>
            </ul>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Buy</Button>
          <Button size="small">Chart</Button>
        </CardActions>
      </Card>
    </div>
  );
}

