const Order = require('../model/order');


const addNewOrders = async (req, res) => {

    try {
        req.body['OrderList'] = req.body
        
        const data = await Order.create(req.body)
        if(data){
            return res.json({
                msg: "Order Save"
            })
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to create the order.' });
    }
};

module.exports = {
    addNewOrders,
};
