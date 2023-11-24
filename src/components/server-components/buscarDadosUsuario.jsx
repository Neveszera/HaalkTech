const buscarDadosUsuario = async () => {
    try {
      const response = await fetch('http://localhost:8080/GlobalSolution/rest/usuario', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
        },
      });
  
      if (!response.ok) {
        throw new Error('Erro ao buscar dados do usuário');
      }
  
      const userData = await response.json();
      return userData;
    } catch (error) {
      console.error('Erro na requisição de dados do usuário:', error);
    }
  };
  
  export default buscarDadosUsuario;