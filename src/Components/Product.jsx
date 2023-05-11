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

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          <Typography
          className={ClassNames.action}
          variant='h5'
          color='textSecondary'
          >
            {accounting.formatMoney(50, "$")}
          </Typography>
        }
        title="Zapatilla Adida"
        subheader="En stock"
      />

      <CardMedia
        component="img"
        height="194"
        image="data:image/jpeg;base64,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"
        alt="Adidas"
      />

      <CardContent>
        <Typography variant="body2" color="textSecondary">
          This impressive
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="add to Cart">
          <AddShoppingCart fontSize='large' />
        </IconButton>

        {Array(4)
        .fill()
        .map((_, i) => (
          <p>&#11088;</p>
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
          <Typography paragraph>description</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
