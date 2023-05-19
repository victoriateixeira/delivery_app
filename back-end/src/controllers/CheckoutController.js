const checkoutService = require('../services/CheckoutService');

const getSellers = async (_req, res, next) => {
  try {
    const result = await checkoutService.getAllSellers();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const postSale = async (req, res, next) => {
  console.log(req.header);
  try {
    const result = await checkoutService.createSale(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getSellers,
  postSale,
 };