import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { ClassNames } from '@emotion/react';
import accounting from 'accounting';
import DeleteIcon from '@mui/icons-material/Delete';
import { useStateValue } from '../stateProvider';
import { actionTypes } from '../reducer';
import { TextField } from '@mui/material';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const ExampleComponent = () => {
  return <ExpandMore expand={true} />;
};

export default function CheckoutCart({ product: { id, name, image, price, rating, description } }) {
  const [{ basket }, dispatch] = useStateValue();

  const item = basket.find((item) => item.id === id); // Buscar el producto en el carrito

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    if (!isNaN(newQuantity)) {
      dispatch({
        type: actionTypes.SET_QUANTITY,
        id,
        quantity: newQuantity,
      });
    }
  };

  const removeItem = () => {
    dispatch({
      type: actionTypes.REMOVE_ITEM,
      id,
    });
  };

  return (
    <Card style={{ width: '350px' }} className="carta">
      <CardHeader
        action={
          <Typography className={ClassNames.action} variant="p" color="textSecondary">
            {accounting.formatMoney(price, '$')}
          </Typography>
        }
        title={name}
      />

      <CardMedia component="img" height="194" image={image} alt="Adidas" />

      <CardActions disableSpacing>
        <div className="cardRating">
          <TextField
            type="number"
            label="Cantidad"
            value={item.quantity} // Usar la cantidad del producto en el carrito
            onChange={handleQuantityChange}
            inputProps={{ min: 1 }}
          />
        </div>

        <IconButton onClick={removeItem}>
          <DeleteIcon fontSize="large" />
        </IconButton>
      </CardActions>
    </Card>
  );
}