const checkoutService = require('../services/CheckoutService');

const getSellers = async (req, res, next) => {
  try {
    const result = await checkoutService.getAllSellers();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getSellers,
 };