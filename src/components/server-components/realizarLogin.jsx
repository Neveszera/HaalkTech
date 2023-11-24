const realizarLogin = async (credentials) => {
    try {
      const response = await fetch('http://localhost:8080/GlobalSolution/rest/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });
  
      if (response.ok) {
        sessionStorage.setItem('isLoggedIn', 'true');
      } else {
        throw new Error('Credenciais inválidas');
      }
    } catch (error) {
      console.error('Erro na requisição de login:', error);
    }
  };
  
  export default realizarLogin;