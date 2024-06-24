import React, { useState, useEffect } from 'react';
import { initializeData, getProducts, getEstoque } from '../utils/Utils';
import './Reports.css';

const Reports = () => {
  const [reportType, setReportType] = useState('Produtos');
  const [products, setProducts] = useState([]);
  const [estoque, setEstoque] = useState([]);
  const [interval, setInterval] = useState(30); // Intervalo configurável em dias

  useEffect(() => {
    initializeData();
  }, []);

  const handleGenerateReport = () => {
    if (reportType === 'Produtos') {
      const currentDate = new Date();
      const intervalDate = new Date(currentDate);
      intervalDate.setDate(currentDate.getDate() + interval);

      const filteredProducts = getProducts().filter(product => {
        const expiryDate = new Date(product.validade);
        return expiryDate >= currentDate && expiryDate <= intervalDate;
      });

      setProducts(filteredProducts);
      setEstoque([]); // Limpa o estado de estoque
    } else if (reportType === 'Estoque') {
      const estoqueData = getEstoque();
      const somaValorTotalEstoque = estoqueData.reduce((acc, item) => acc + (item.valorTotalEstoque || 0), 0);
      const somaValorVenda = estoqueData.reduce((acc, item) => acc + ((item.valorVenda || 0) * (item.quantidadeEstoque || 0)), 0);
      const somaMargemLucro = estoqueData.reduce((acc, item) => acc + ((item.margemLucro || 0) * (item.quantidadeEstoque || 0)), 0);

      setEstoque(estoqueData);
      setProducts([]); // Limpa o estado de produtos

      console.log('Soma dos valores totais em estoque:', somaValorTotalEstoque);
      console.log('Soma dos valores de venda:', somaValorVenda);
      console.log('Soma das margens de lucro:', somaMargemLucro);
    } else {
      setProducts([]);
      setEstoque([]);
    }
  };

  return (
    <div className="reports">
      <h2>Gerar Relatórios</h2>
      <div>
        <input
          type="radio"
          id="produtos"
          name="reportType"
          value="Produtos"
          checked={reportType === 'Produtos'}
          onChange={() => setReportType('Produtos')}
        />
        <label htmlFor="produtos">Relatório de Produtos</label>

        <input
          type="radio"
          id="estoque"
          name="reportType"
          value="Estoque"
          checked={reportType === 'Estoque'}
          onChange={() => setReportType('Estoque')}
        />
        <label htmlFor="estoque">Relatório de Estoque</label>
      </div>

      {reportType === 'Produtos' && (
        <div>
          <label htmlFor="interval">Intervalo de dias para validade: </label>
          <input
            type="number"
            id="interval"
            value={interval}
            onChange={(e) => setInterval(e.target.value)}
          />
        </div>
      )}

      <button onClick={handleGenerateReport}>Gerar Relatório</button>

      {reportType === 'Produtos' && products.length > 0 && (
        <div className='relatorio'>
          <div className='conteudo'>
            <h3>Relatório de Produtos Próximos da Validade</h3>
            <table>
              <thead>
                <tr>
                  <th>Código de Barras</th>
                  <th>Nome do Produto</th>
                  <th>Quantidade em Estoque</th>
                  <th>Data de Validade</th>
                  <th>Número do Lote</th>
                </tr>
              </thead>
              <tbody>
                {products.map(product => (
                  <tr key={product.codigoBarras}>
                    <td>{product.codigoBarras}</td>
                    <td>{product.nomeProduto}</td>
                    <td>{product.quantidadeEstoque}</td>
                    <td>{new Date(product.validade).toLocaleDateString()}</td>
                    <td>{product.numeroLote}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {reportType === 'Estoque' && estoque.length > 0 && (
        <div className='relatorio'>
          <div className='conteudo'>
            <h3>Relatório Financeiro do Estoque</h3>
            <table>
              <thead>
                <tr>
                  <th>Código de Barras</th>
                  <th>Nome do Produto</th>
                  <th>Custo Unitário</th>
                  <th>Valor Total em Estoque</th>
                  <th>Valor de Venda</th>
                  <th>Margem de Lucro (%)</th>
                </tr>
              </thead>
              <tbody>
                {estoque.map(item => (
                  <tr key={item.codigoBarras}>
                    <td>{item.codigoBarras}</td>
                    <td>{item.nomeProduto}</td>
                    <td>{item.custoUnitario?.toFixed(2) || 'N/A'}</td>
                    <td>{item.valorTotalEstoque?.toFixed(2) || 'N/A'}</td>
                    <td>{item.valorVenda?.toFixed(2) || 'N/A'}</td>
                    <td>{item.margemLucro?.toFixed(2) || 'N/A'}</td>
                  </tr>
                ))}
                <tr>
                  <td colSpan="3"><strong>Total</strong></td>
                  <td><strong>{estoque.reduce((acc, item) => acc + (item.valorTotalEstoque || 0), 0).toFixed(2)}</strong></td>
                  <td><strong>{estoque.reduce((acc, item) => acc + ((item.valorVenda || 0) * (item.quantidadeEstoque || 0)), 0).toFixed(2)}</strong></td>
                  <td><strong>{estoque.reduce((acc, item) => acc + ((item.margemLucro || 0) * (item.quantidadeEstoque || 0)), 0).toFixed(2)}</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reports;
