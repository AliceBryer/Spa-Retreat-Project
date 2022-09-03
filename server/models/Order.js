const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now
  },

  treatments: [
    {
        type: Schema.Types.TreatmentId,
        ref: 'Treatments'
    }
  ],
        User: [
           {
            type:Schema.Types.UserId,
            ref: 'UserId'
           }
        ]

    });

    const Order = mongoose.model('Order', orderSchema);
    
    module.exports = Order;

    