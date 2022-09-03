const mongoose = require('mongoose');

const { Schema } = mongoose;

const facilitiesSchema = new Schema({
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

    const Order = mongoose.model('Wishlist', orderSchema);
    
    module.exports = Wishlist;
    

   
 