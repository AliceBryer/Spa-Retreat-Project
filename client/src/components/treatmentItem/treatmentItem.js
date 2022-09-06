// map through the treatment items to produce this component

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart, faCartShopping} from "@fortawesome/free-solid-svg-icons";


// eventually replace/extract placeholder function with add to wishlist functionality
const wishlistPlaceholder = () => {
  console.log('wishlist button press successful')
}
// eventually replace/extract  placeholder function with add to cart functionality
const cartPlaceholder = () => {
  console.log('cart button press successful')
}

// singular treatment item
 function treatmentItem() {
  return (
    <div className='treatment-item-container'>
        <div className='single-treatment-item'>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia className='treatment-image'
        component="img"
        height="140"
        image="https://www.aquasana.co.uk/treatments/massage-treatments/elemis-freestyle-deep-tissue-massage-55/_jcr_content/image.coreimg.jpeg/1648568526465/aqua-sana-mens-ultimate-back-revival.jpeg"
        alt="green iguana"
      />
      <CardContent>
        <Typography className='treatment-title' gutterBottom variant="h5" component="div" >
          Full Body Massage
        </Typography>
        <Typography className='treatment-description' variant="body2" color="text.secondary">
          A head-to-toe deep tissue massage to leave you feeling the most relaxed you've ever been.
        </Typography>
      </CardContent>
      <CardActions className='icon-buttons'>
        <Button size="small"onClick={wishlistPlaceholder} > Add to wishlist  <FontAwesomeIcon className='heart-icon' icon={faHeart} /> </Button>
        <Button size="small" onClick={cartPlaceholder} >Add to Basket <FontAwesomeIcon className='cart-icon' icon={faCartShopping} /> </Button>
      </CardActions>
    </Card>
    </div>

     
</div>
  );
}

export default treatmentItem;
