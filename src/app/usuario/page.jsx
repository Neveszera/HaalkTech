"use client"

import React, { useEffect, useState } from 'react';

const Usuario = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('http://localhost:5000/users/${id}'); 

        if (!response.ok) {
          console.error('Erro ao obter dados do usuário:', response.statusText);
          return;
        }

        const user = await response.json();
        setUserData(user);
      } catch (error) {
        console.error('Erro ao conectar com o servidor JSON:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  return (
    <section>
      {loading ? (
        <p>Carregando dados do usuário...</p>
      ) : userData ? (
        <div>
          <h1>Bem-vindo, {userData.nome}!</h1>
          <div>
            <p>Email: {userData.email}</p>
            <p>Data de Nascimento: {userData.dataNascimento}</p>
            <p>Telefone Celular: {userData.telefoneCelular}</p>
            <p>Endereço: {userData.endereco}</p>
            <p>Sexo: {userData.sexo}</p>
          </div>
          <div>
            <h2>Medicamentos</h2>
            <ul>
              {userData.medicamentos.map((medicamento, index) => (
                <li key={index}>{medicamento}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Alergias</h2>
            <ul>
              {userData.alergias.map((alergia, index) => (
                <li key={index}>{alergia}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Notas</h2>
            <ul>
              {userData.notas.map((nota, index) => (
                <li key={index}>{nota}</li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <p>Dados do usuário não disponíveis.</p>
      )}
    </section>
  );
};

export default Usuario;
