import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ClassNames } from '@emotion/react';
import { AddShoppingCart } from '@mui/icons-material';
import accounting from 'accounting';
import { actionTypes } from '../reducer';
import { useStateValue } from '../stateProvider';

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

export default function Product({product : {id, name, productType, image, price, rating, description}}) {
  const [expanded, setExpanded] = React.useState(false);
  const [{basket}, dispatch] = useStateValue()

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

const addToBasket= () => {
  dispatch({
    type: actionTypes.ADD_TO_BASKET,
    item: {
      id,
      name,
      productType,
      image,
      price,
      rating,
      description
    }
  })
}

  return (
    <Card sx={{ maxWidth: 350 }}>
      <CardHeader
        action={
          <Typography
          className={ClassNames.action}
          variant='h5'
          color='textSecondary'
          >
            {accounting.formatMoney(price, "$")}
          </Typography>
        }
        title= {name}
        subheader="In stock"
      />

      <CardMedia
        component="img"
        height="194"
        image={image}
        alt="Adidas"
      />

      <CardContent>
        <Typography variant="body2" color="textSecondary">
          {productType}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="add to Cart" onClick={addToBasket}>
          <AddShoppingCart fontSize='large' />
        </IconButton>

        {typeof rating === 'number' && rating >= 0 && Array(Math.floor(rating))
          .fill()
          .map((_, i) => (
            <p key={i}>&#11088;</p>
          ))}

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
