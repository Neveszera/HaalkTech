"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../../styles/Cadastro.module.css';

const Cadastro = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    cpf: '',
    dataNascimento: '',
    telefoneCelular: '',
    endereco: '',
    sexo: '',
    email: '',
    confirmarEmail: '',
    senha: '',
    confirmarSenha: '',
    autorizacao: false,
  });
  const [users, setUsers] = useState([]);
  const [mensagem, setMensagem] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const loadedUsers = localStorage.getItem('db.json');
      if (loadedUsers) {
        setUsers(JSON.parse(loadedUsers).users || []);
      }
    };

    fetchData();
  }, []);

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const validateInputs = () => {
    if (
      !formData.nome ||
      !formData.cpf ||
      !formData.dataNascimento ||
      !formData.telefoneCelular ||
      !formData.endereco ||
      !formData.sexo ||
      !formData.email ||
      !formData.confirmarEmail ||
      !formData.senha ||
      !formData.confirmarSenha
    ) {
      setMensagem('Todos os campos são obrigatórios.');
      return false;
    }

    if (formData.email !== formData.confirmarEmail) {
      setMensagem('Os emails não coincidem.');
      return false;
    }

    if (formData.senha !== formData.confirmarSenha) {
      setMensagem('As senhas não coincidem.');
      return false;
    }

    return true;
  };

  const isDuplicateUser = () => {
    return users.some(
      (user) =>
        user.email.toLowerCase() === formData.email.toLowerCase() ||
        user.cpf === formData.cpf
    );
  };

  const handleCadastro = async () => {
    if (!validateInputs()) {
      return;
    }

    const newUser = { ...formData, id: users.length + 1 };
    const updatedUsers = [...users, newUser];

    try {
      const response = await fetch('http://localhost:8080/GlobalSolution/rest/paciente', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });

      if (!response.ok) {
        console.error('Erro ao cadastrar usuário na API:', response.statusText);
        await sendToServerJson(newUser); // Se falhar, tenta no servidor JSON
      } else {
        console.log('Cadastro realizado com sucesso na API!');
        setMensagem('Cadastro realizado com sucesso!');
        setIsSuccess(true);
        setIsError(false);
        window.location.href = '/login';
      }
    } catch (error) {
      console.error('Erro ao conectar com a API:', error);
      await sendToServerJson(newUser); // Se falhar, tenta no servidor JSON
    }

    setUsers(updatedUsers);
  };

  const sendToServerJson = async (data) => {
    try {
      const response = await fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        console.error('Erro ao cadastrar usuário no servidor JSON:', response.statusText);
        setMensagem('Erro ao cadastrar usuário.');
        setIsError(true);
        setIsSuccess(false);
      } else {
        console.log('Cadastro realizado com sucesso no servidor JSON!');
        setMensagem('Cadastro realizado com sucesso!');
        setIsSuccess(true);
        setIsError(false);
      }
    } catch (error) {
      console.error('Erro ao conectar com o servidor JSON:', error);
      setMensagem('Erro ao conectar com o servidor.');
      setIsError(true);
      setIsSuccess(false);
    }
  };

  const handleDismiss = () => {
    setIsSuccess(false);
    setIsError(false);
  };

  return (
    <section className={styles.cadastroSection}>
      <div className={styles.cadastroLeft}>
        <div className={styles.cadastroImage}>
          <Image src="/img/cadastro.svg" alt="" width={678} height={789} />
        </div>
      </div>
      <div className={styles.cadastroRight}>
        <div className={styles.cadastroForm}>
          <h1>Cadastro</h1>
          <input type="text" placeholder="Nome" className={styles.input} onChange={handleInputChange} name="nome" />
          <input type="text" placeholder="CPF" className={styles.input} onChange={handleInputChange} name="cpf" />
          <input
            type="text"
            placeholder="Data de Nascimento"
            className={styles.input}
            onChange={handleInputChange}
            name="dataNascimento"
          />
          <input
            type="text"
            placeholder="Telefone Celular"
            className={styles.input}
            onChange={handleInputChange}
            name="telefoneCelular"
          />
          <input type="text" placeholder="Endereço" className={styles.input} onChange={handleInputChange} name="endereco" />
          <input type="text" placeholder="Sexo" className={styles.input} onChange={handleInputChange} name="sexo" />
          <input type="email" placeholder="Email" className={styles.input} onChange={handleInputChange} name="email" />
          <input
            type="email"
            placeholder="Confirmar Email"
            className={styles.input}
            onChange={handleInputChange}
            name="confirmarEmail"
          />
          <div className={styles.passwordInput}>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Senha"
              className={styles.input}
              onChange={handleInputChange}
              name="senha"
            />
            <button type="button" onClick={handleTogglePassword} className={styles.togglePasswordButton}>
              <Image
                src={`/img/icons/olho${showPassword ? '-aberto' : '-fechado'}.svg`}
                alt={showPassword ? 'Olho aberto' : 'Olho fechado'}
                width={20}
                height={20}
              />
            </button>
          </div>
          <div className={styles.passwordInput}>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Confirmar Senha"
              className={styles.input}
              onChange={handleInputChange}
              name="confirmarSenha"
            />
            <button type="button" onClick={handleTogglePassword} className={styles.togglePasswordButton}>
              <Image
                src={`/img/icons/olho${showPassword ? '-aberto' : '-fechado'}.svg`}
                alt={showPassword ? 'Olho aberto' : 'Olho fechado'}
                width={20}
                height={20}
              />
            </button>
          </div>
          <div className={styles.checkboxContainer}>
            <input type="checkbox" className={styles.checkbox} onChange={handleInputChange} name="autorizacao" />
            <label className={styles.checkboxLabel}>
              Eu autorizo a utilização dos meus dados e respostas para fins de treinamento de inteligência artificial.
            </label>
          </div>
          {mensagem && (
            <div className={isSuccess ? styles.successMessage : styles.errorMessage} onClick={handleDismiss}>
              {mensagem}
            </div>
          )}
          <button className={styles.cadastrarButton} onClick={handleCadastro}>
            Cadastrar
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cadastro;

