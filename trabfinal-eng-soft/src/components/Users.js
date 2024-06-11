import React, { useState } from 'react';
import './Users.css';
import { Link } from 'react-router-dom';

const Users = () => {
  const [view, setView] = useState('');
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [tipoUsuario, setTipoUsuario] = useState('');
  const [message, setMessage] = useState('');
  const [searchText, setSearchText] = useState('');

  const handleCadastro = () => {
    setNome('');
    setCpf('');
    setTipoUsuario('');
    setMessage('Cadastro feito com sucesso');
  };

  const handleLimpar = () => {
    setNome('');
    setCpf('');
    setTipoUsuario('');
    setMessage('');
  };

  const handleSearchClear = () => {
    setSearchText('');
  };

  return (
    <div className="users">
      <div className="header">
        <Link to="/" className="home-link">Wallmart</Link>
      </div>
      <div className="buttons">
        <button className="shop-now-button" onClick={() => setView('cadastrar')}>Cadastrar Usuário</button>
        <button className="shop-now-button" onClick={() => setView('consultar')}>Consultar Usuário</button>
      </div>
      {view === 'cadastrar' && (
        <div className="cadastro">
          <input
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <input
            type="text"
            placeholder="CPF"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
          <input
            type="text"
            placeholder="Tipo de Usuário"
            value={tipoUsuario}
            onChange={(e) => setTipoUsuario(e.target.value)}
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
            placeholder="Pesquisar usuário"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>CPF</th>
                <th>Tipo de usuário</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Nome</td>
                <td>XXX.XXX.XX-X</td>
                <td>Administrador</td>
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

export default Users;



