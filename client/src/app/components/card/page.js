import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Form from '../customsForm/page'



export default function ImgMediaCard(props) {
  const [formVisible, setFormVisible] = useState(false)
  const [currentItemId, setCurrentItemId] = useState(null)
  const itemId = props.item['_id'];
  const imageUrl = itemId
    ? `http://localhost:8080/item-image/${itemId}`
    : '';

    const formItems = [
      {label:'Full Name', type:'text'}, 
      {label:'Address', type:'text'}, 
      {label:'Product code', type:'text'},
      {label:'Product Description', type:'text'} 
    ]

    const handleBuyButtonClick = () => {
       if (currentItemId === itemId){
        setFormVisible(false)
        setCurrentItemId(null)
       } else {
        setFormVisible(true)
        setCurrentItemId(itemId)
       }
    }
 
  return (
    <div>
      <Card sx={{ maxWidth: 300, maxHeight: 500}}>
      <img
          src={imageUrl}
          width={250}
          height={200}
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
          <Button size="small" onClick={() => handleBuyButtonClick(itemId)}>Buy</Button>
          <Button size="small">Chart</Button>
        </CardActions>
      </Card>
      {formVisible && currentItemId === itemId && (
        <Form formItems={formItems} apiEndpoint="/item" />
      )}
    </div>
  );
}

