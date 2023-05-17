const objectDate = '2023-05-10T00:00:00.000Z';

const orders = [{
  id: 1,
  userId: 3,
  sellerId: 2,
  totalPrice: '17.78',
  deliveryAddress: 'Rua da Silva, Gama',
  deliveryNumber: '34',
  saleDate: objectDate,
  status: 'ENTREGUE',
}];

const order = {
  id: 1,
  userId: 3,
  sellerId: 2,
  totalPrice: '17.78',
  deliveryAddress: 'Rua da Silva, Gama',
  deliveryNumber: '34',
  saleDate: objectDate,
  status: 'ENTREGUE',
  products: [
    {
      name: 'Becks 600ml',
      price: '8.89',
      SalesProducts: {
        quantity: 2,
      },
    },
  ],
  seller: {
    name: 'Fulana Pereira',
  },
};

const updatedSale = {
  id: 1,
  price: '17.78',
  date: objectDate,
  status: 'ENTREGUE',
  seller: 'Fulana Pereira',
  products: [
    {
      id: 1,
      name: 'Becks 600ml',
      price: '8.89',
      quantity: 2,
    },
  ],
};

module.exports = { orders, order, updatedSale };