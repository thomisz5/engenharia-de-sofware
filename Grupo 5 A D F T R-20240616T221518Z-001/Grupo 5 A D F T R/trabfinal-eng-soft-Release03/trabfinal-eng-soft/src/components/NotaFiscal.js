import React, { useState } from 'react';
import './NotaFiscal.css';
import { Link } from 'react-router-dom';

const NotaFiscal = () => {
  const [view, setView] = useState('');
  const [CPF, setCPF] = useState('');
  const [produto, setProduto] = useState('');
  const [quantidadeProduto, setQuantidadeProduto] = useState('');
  const [dataEmissao, setDataEmissao] = useState('');
  const [CNPJ, setCNPJ] = useState('');
  const [message, setMessage] = useState('');
  const [searchText, setSearchText] = useState('');

  const handleCadastro = () => {
    setCPF('');
    setProduto('');
    setQuantidadeProduto('');
    setDataEmissao('');
    setCNPJ('');
    setMessage('Cadastro da nota fiscal feito com sucesso');
  };

  const handleLimpar = () => {
    setCPF('');
    setProduto('');
    setQuantidadeProduto('');
    setDataEmissao('');
    setCNPJ('');
    setMessage('');
  };

  const handleSearchClear = () => {
    setSearchText('');
  };

  return (
    <div className="notafiscal">
      <div className="header">
        <Link to="/" className="home-link">Wallmart</Link>
      </div>
      <div className="buttons">
        <button className="shop-now-button" onClick={() => setView('cadastrar')}>Cadastrar Nota Fiscal</button>
        <button className="shop-now-button" onClick={() => setView('consultar')}>Consultar Nota Fiscal</button>
      </div>
      {view === 'cadastrar' && (
        <div className="cadastro">
          <input
            type="text"
            placeholder="CPF"
            value={CPF}
            onChange={(e) => setCPF(e.target.value)}
          />
          <input
            type="text"
            placeholder="Produto"
            value={produto}
            onChange={(e) => setProduto(e.target.value)}
          />
          <input
            type="text"
            placeholder="Quantidade do produto"
            value={quantidadeProduto}
            onChange={(e) => setQuantidadeProduto(e.target.value)}
          />
          <input
            type="text"
            placeholder="Data de emissão"
            value={dataEmissao}
            onChange={(e) => setDataEmissao(e.target.value)}
          />
          <input
            type="text"
            placeholder="CNPJ"
            value={CNPJ}
            onChange={(e) => setCNPJ(e.target.value)}
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
            placeholder="Pesquisar nota fiscal"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <table>
            <thead>
              <tr>
                <th>CPF</th>
                <th>Produto</th>
                <th>Quantidade Produto</th>
                <th>Data de emissao</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>XXX.XXX.XXX-XX</td>
                <td>XXXXXXXXXXXXX</td>
                <td>XXX</td>
                <td>dd/mm/YYYY</td>
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

export default NotaFiscal;