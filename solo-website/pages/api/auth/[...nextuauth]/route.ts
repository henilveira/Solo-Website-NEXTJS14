import { Resend } from 'resend';

const resend = new Resend('re_123456789');

resend.apiKeys.create({ name: 'Production' });