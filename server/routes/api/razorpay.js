

// const express = require('express');
// const Razorpay = require('razorpay');
// const router = express.Router();

// // Initialize Razorpay instance
// const razorpay = new Razorpay({
//     key_id: 'rzp_test_ufGoxV9E2Qfxq0',
//     key_secret: '3nOToCbM2ZTrUkYVlULKSS6c',
// });

// // Create an order
// router.post('/order', async (req, res) => {
//     try {
//         const options = {
//             amount: req.body.amount, 
//             currency: 'INR',
//             receipt: 'receipt#1',
//         };
//         const order = await razorpay.orders.create(options);
//         res.json(order);
//     } catch (error) {
//         res.status(500).send(error);
//     }
// });

// // Verify payment
// router.post('/verify', (req, res) => {
//     const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
//     // Implement verification logic here
//     res.send('Payment verification logic goes here');
// });

// module.exports = router;





// Shine_Ecommerce\server\routes\api\razorpay.js

// const express = require('express'); 
// const Razorpay = require('razorpay');
// const router = express.Router();

// // Initialize Razorpay instance
// const razorpay = new Razorpay({
//     key_id: 'rzp_test_ufGoxV9E2Qfxq0',
//     key_secret: '3nOToCbM2ZTrUkYVlULKSS6c',
// });

// // Create an order
// router.post('/order', async (req, res) => {
//     try {
//         const amount = req.body.amount; 
//         const options = {
//             amount: amount, 
//             currency: 'INR',
//             receipt: 'receipt#1',
//         };
//         const order = await razorpay.orders.create(options);
//         res.json(order);
//     } catch (error) {
//         res.status(500).send(error);
//     }
// });

// // Verify payment
// router.post('/verify', (req, res) => {
//     const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
//     // Implement verification logic here
//     res.send('Payment verification logic goes here');
// });



// module.exports = router;
// Shine_Ecommerce\server\routes\api\razorpay.js

// const express = require('express'); 
// const Razorpay = require('razorpay');
// const router = express.Router();

// // Initialize Razorpay instance
// const razorpay = new Razorpay({
//     key_id: 'rzp_test_ufGoxV9E2Qfxq0',
//     key_secret: '3nOToCbM2ZTrUkYVlULKSS6c',
// });

// // Create an order

// router.post('/order', async (req, res) => {
//     try {
//         const amount = req.body.amount;
//         console.log('Received amount:', amount);
        
//         if (!amount || isNaN(amount) || amount <= 0) {
//             return res.status(400).send('Invalid amount');
//         }

//         const options = {
//             amount: amount, 
//             currency: 'INR',
//             receipt: 'receipt#1',
//         };
//         const order = await razorpay.orders.create(options);
//         res.json(order);
//     } catch (error) {
//         console.error('Error creating order:', error);
//         res.status(500).send(error);
//     }
// });


// module.exports = router;


const express = require('express'); 
const Razorpay = require('razorpay');
const router = express.Router();

// Initialize Razorpay instance
const razorpay = new Razorpay({
    key_id: 'rzp_test_ufGoxV9E2Qfxq0',
    key_secret: '3nOToCbM2ZTrUkYVlULKSS6c',
});

// Create an order
router.post('/order', async (req, res) => {
    try {
        const amount = req.body.amount;
        console.log('Received amount:', amount);
        
        // Validate the amount
        if (!amount || isNaN(amount) || amount <= 0) {
            return res.status(400).send('Invalid amount');
        }

        // Prepare order options
        const options = {
            amount: Math.round(amount * 100), // Convert INR to paise (smallest currency unit)
            currency: 'INR', // Set currency to INR
            receipt: `receipt_${Date.now()}`, // Unique receipt for each transaction
        };

        // Create the order
        const order = await razorpay.orders.create(options);
        res.json(order);
    } catch (error) {
        console.error('Error creating order:', error);
        res.status(500).send({ error: 'Unable to create order' });
    }
});

module.exports = router;






// Shine Ecommerce Website using mongodb react node 
// Purpose and Scope
// Technologies
// FlowChart
// Main Features
// Additional Features
// Future Scope 
// Screenshots