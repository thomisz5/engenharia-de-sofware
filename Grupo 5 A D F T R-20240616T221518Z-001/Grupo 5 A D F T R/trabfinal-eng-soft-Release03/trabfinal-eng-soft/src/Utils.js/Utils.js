export const initializeData = () => {
  const products = [
    { codigoBarras: '1234567890123', nomeProduto: 'Produto 1', quantidadeEstoque: 10, validade: '2024-08-01', numeroLote: 'L1' },
    { codigoBarras: '1234567890124', nomeProduto: 'Produto 2', quantidadeEstoque: 20, validade: '2024-06-29', numeroLote: 'L2' },
    { codigoBarras: '1234567890125', nomeProduto: 'Produto 3', quantidadeEstoque: 30, validade: '2024-08-01', numeroLote: 'L3' },
    { codigoBarras: '1234567890126', nomeProduto: 'Produto 4', quantidadeEstoque: 15, validade: '2024-08-28', numeroLote: 'L4' },
    { codigoBarras: '1234567890127', nomeProduto: 'Produto 5', quantidadeEstoque: 5, validade: '2024-07-11', numeroLote: 'L5' },
    { codigoBarras: '1234567890128', nomeProduto: 'Produto 6', quantidadeEstoque: 32, validade: '2024-06-28', numeroLote: 'L6' },
    // Adicione mais produtos conforme necessário
  ];

  const estoque = [
    { codigoBarras: '1234567890123', nomeProduto: 'Produto 1', quantidadeEstoque: 10, custoUnitario: 5.00, valorTotalEstoque: 50.00, valorVenda: 7.50, margemLucro: 2.50 },
    { codigoBarras: '1234567890124', nomeProduto: 'Produto 2', quantidadeEstoque: 20, custoUnitario: 3.00, valorTotalEstoque: 60.00, valorVenda: 5.00, margemLucro: 2.00 },
    { codigoBarras: '1234567890125', nomeProduto: 'Produto 3', quantidadeEstoque: 30, custoUnitario: 2.50, valorTotalEstoque: 75.00, valorVenda: 4.00, margemLucro: 1.50 },
    { codigoBarras: '1234567890126', nomeProduto: 'Produto 4', quantidadeEstoque: 15, custoUnitario: 8.00, valorTotalEstoque: 120.00, valorVenda: 12.00, margemLucro: 4.00 },
    { codigoBarras: '1234567890127', nomeProduto: 'Produto 5', quantidadeEstoque: 5, custoUnitario: 6.00, valorTotalEstoque: 30.00, valorVenda: 9.00, margemLucro: 3.00 },
    { codigoBarras: '1234567890128', nomeProduto: 'Produto 6', quantidadeEstoque: 32, custoUnitario: 4.00, valorTotalEstoque: 128.00, valorVenda: 6.00, margemLucro: 2.00 },
    // Adicione mais itens conforme necessário
  ];

  if (!localStorage.getItem('products')) {
    localStorage.setItem('products', JSON.stringify(products));
  }

  if (!localStorage.getItem('estoque')) {
    localStorage.setItem('estoque', JSON.stringify(estoque));
  }
};

export const getProducts = () => JSON.parse(localStorage.getItem('products')) || [];

export const getEstoque = () => JSON.parse(localStorage.getItem('estoque')) || [];
