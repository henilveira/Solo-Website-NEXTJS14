import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import data from '/contato/formulario-contato'
dotenv.config();

export default async function ContactAPI(req, res) {
    try {
        const { empresa, nome, email, mensagem } = req.body;

        const user = process.env.user; // Seu e-mail (usuário SMTP)
        const pass = process.env.pass; // Sua senha de e-mail (usuário SMTP)

        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: user,
                pass: pass,
            },
        });

        const mail = await transporter.sendMail({
            from: email, // E-mail fornecido pelo usuário
            to: 'henriqueluiz16022000@gmail.com',
            replyTo: email, // Define o e-mail para resposta como o fornecido pelo usuário
            subject: 'Contato através da Solo Solutions',
            html: `
            <p>Empresa: ${empresa} </p>
            <p>Nome: ${nome} </p>
            <p>Email: ${email} </p>
            <p>Mensagem: ${mensagem} </p>
            `,
        });
        console.log(data.email)

        console.log('Mensagem enviada:', mail.messageId);

        return res.status(200).json({ mensagem: 'sucesso' });
    } catch (error) {
        console.error('Erro ao enviar e-mail:', error);
        res.status(500).json({ mensagem: 'Não foi possível enviar seu e-mail.' });
    }
}
