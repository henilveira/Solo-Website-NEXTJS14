import { useState } from 'react';

const API_URL = 'http://127.0.0.1:8000/api';

export function useEmailChangeRequest() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const requestEmailChange = async (email_antigo: string, email_novo: string) => {
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch(`${API_URL}/accounts/request-email-change/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email_antigo, email_novo }),
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error('Email change request failed');
      }

      setSuccess(true);
    } catch (err) {
      setError('Failed to request email change. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return { requestEmailChange, isLoading, error, success };
}