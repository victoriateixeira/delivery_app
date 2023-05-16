const { User, Sale, SalesProducts } = require('../database/models');

const getAllSellers = async () => {
  const sellers = await User.findAll({
    where: { role: 'seller' },
    attributes: { exclude: ['password'] },
    
  });
  
  return sellers;
};

const createSale = async (sale) => {
  const newSale = await Sale.create(sale);
  const { products } = newSale;
  const productsSale = products.map((product) => (
    {
      saleId: newSale.id,
      productId: product.id,
      quantity: product.quantity,
    }
  ));
  await SalesProducts.bulkCreate(productsSale);

  return newSale;
};

// objeto esperado para inserir nova compra
// {
//   user_id: 3,
//   seller_id: 2,
//   total_price: 17.78,
//   delivery_address: 'Rua da Silva, Gama',
//   delivery_number: '34',
//   sale_date: '2023-05-10',
// },

// localStorage
// {
//   id: 2,
//   name: "Heineken 600ml".
//   price: "7.50".
//   qty: 1,
//   urlImage: "http://localhost:3001/images/heineken_600ml.jpg"
// }

// objeto esperado para inserir no SalesProducts

module.exports = {
  getAllSellers,
  createSale,
};