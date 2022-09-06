const mongoose = require('mongoose');

const { Schema } = mongoose;

const WishlistSchema = new Schema({
    User: [
        {
         type:Schema.Types.UserId,
         ref: 'UserId'
        }
     ],

     Treatment: [
        {
            type: Schema.Types.TreatmentlistId,
            ref: 'Treatment'
        }
      ],

    });

    const Wishlist = mongoose.model('Wishlist',wishlistSchema);
    
    module.exports = Wishlist;
    

   
 