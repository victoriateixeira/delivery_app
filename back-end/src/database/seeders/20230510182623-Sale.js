module.exports = {
  up: async (queryInterface) => {
    const sale = await queryInterface.bulkInsert('sales', [
      {
        user_id: 3,
        seller_id: 2,
        total_price: 17.78,
        delivery_address: 'Rua da Silva, Gama',
        delivery_number: '34',
        sale_date: '2023-05-10',
        status: 'PENDENTE',
      },
    ]);
    await queryInterface.bulkInsert('sales_products', [
      {
        sale_id: sale,
        product_id: 9,
        quantity: 2,
      },
    ]);
  },

  down: async (queryInterface) => {
    // Remove os dados inseridos na tabela sales_products
    await queryInterface.bulkDelete('sales_products', null, {});

    // Remove os dados inseridos na tabela sales
    await queryInterface.bulkDelete('sales', null, {});
  },
};
