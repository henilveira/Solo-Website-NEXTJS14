// server.js ou app.js
// Importar módulos
import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());
app.use(cookieParser());

export default app;


// Middleware
app.use(bodyParser.json());
app.use(cookieParser());

// Função para gerar token (você deve definir a função generateToken)
const generateToken = (email, password) => {
    // Implementação da função para gerar token
};

// Rota para autenticação
app.post('/api/accounts/token/', (req, res) => {
    const { email, password } = req.body;

    // Autenticar usuário e gerar token
    const token = generateToken(email, password); // Função para gerar o token

    // Definir cookie HttpOnly
    res.cookie('auth_token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', // Use true se estiver em produção
        sameSite: 'Strict',
    });

    res.json({ message: 'Login bem-sucedido' });
});

app.listen(8000, () => {
    console.log('Servidor rodando na porta 8000');
});
