import React, { useState } from 'react';
import './Estoque.css';
import { Link } from 'react-router-dom';

const Estoque = () => {
  const [view, setView] = useState('');
  const [nomeProduto, setNomeProduto] = useState('');
  const [codigoBarras, setCodigoBarras] = useState('');
  const [lote, setLote] = useState('');
  const [categoria, setCategoria] = useState('');
  const [message, setMessage] = useState('');
  const [searchText, setSearchText] = useState('');

  const handleCadastro = () => {
    setNomeProduto('');
    setCodigoBarras('');
    setLote('');
    setCategoria('');
    setMessage('Cadastro do produto no estoque feito com sucesso');
  };

  const handleLimpar = () => {
    setNomeProduto('');
    setCodigoBarras('');
    setLote('');
    setCategoria('');
    setMessage('');
  };

  const handleSearchClear = () => {
    setSearchText('');
  };

  return (
    <div className="estoque">
      <div className="header">
        <Link to="/" className="home-link">Wallmart</Link>
      </div>
      <div className="buttons">
        <button className="shop-now-button" onClick={() => setView('cadastrar')}>Cadastrar Produto no Estoque</button>
        <button className="shop-now-button" onClick={() => setView('consultar')}>Consultar Produto no Estoque</button>
      </div>
      {view === 'cadastrar' && (
        <div className="cadastro">
          <input
            type="text"
            placeholder="Nome do produto"
            value={nomeProduto}
            onChange={(e) => setNomeProduto(e.target.value)}
          />
          <input
            type="text"
            placeholder="Código de Barras"
            value={codigoBarras}
            onChange={(e) => setCodigoBarras(e.target.value)}
          />
          <input
            type="text"
            placeholder="Lote"
            value={lote}
            onChange={(e) => setLote(e.target.value)}
          />
          <input
            type="text"
            placeholder="Categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          />
          <div className="cadastro-buttons">
            <button className="confirm-button" onClick={handleCadastro}>Confirmar</button>
            <button className="clear-button" onClick={handleLimpar}>Limpar</button>
          </div>
          {message && <p className="success-message">{message}</p>}
        </div>
      )}
      {view === 'consultar' && (
        <div className="consulta">
          <input
            type="text"
            placeholder="Pesquisar produto"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <table>
            <thead>
              <tr>
                <th>Produto</th>
                <th>Código de Barras</th>
                <th>Lote</th>
                <th>Categoria</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>XXXXXXXXXXXXXX</td>
                <td>XXXX.XXXX.XXXX.XXXX</td>
                <td>XXXXXXXXXXXX</td>
                <td>XXXXXXXXXXXXXXXXXX</td>
                <td><button className="edit-button">Editar</button></td>
                <td><button className="remove-button">Remover</button></td>
              </tr>
            </tbody>
          </table>
          <button className="shop-now-button" onClick={handleSearchClear}>Pesquisar</button>
        </div>
      )}
    </div>
  );
};

export default Estoque;