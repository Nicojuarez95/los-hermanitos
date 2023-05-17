import * as React from 'react';
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

export default function CheckoutCart({product : {id, name, productType, image, price, rating, description}}) {
  const [expanded, setExpanded] = React.useState(false);
  const [{basket}, dispatch] = useStateValue()

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

const removeItem = ()=>{
  dispatch({
    type: actionTypes.REMOVE_ITEM,
    id
  })
}

  return (
    <Card sx={{ maxWidth: 350 }} className='carta'>
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

      <CardActions disableSpacing>

        <div className='cardRating'>
            {typeof rating === 'number' && rating >= 0 && Array(Math.floor(rating))
            .fill()
            .map((_, i) => (
                <p key={i}>&#11088;</p>
            ))}
        </div>
        
        <IconButton onClick={removeItem}>
            <DeleteIcon fontSize='large'/>
        </IconButton>
      </CardActions>

    </Card>
  );
}
