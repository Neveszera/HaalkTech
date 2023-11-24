const cadastrarUsuario = async (userData) => {
    try {
        const response = await fetch('http://localhost:8080/GlobalSolution/rest/paciente', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        if (!response.ok) {
            throw new Error('Erro ao cadastrar usuário');
        }
    } catch (error) {
        console.error('Erro na requisição de cadastro:', error);
    }
};

export default cadastrarUsuario;