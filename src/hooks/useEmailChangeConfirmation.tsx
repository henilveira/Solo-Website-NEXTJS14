import { useState } from 'react';

const API_URL = 'http://127.0.0.1:8000/api';

export function useEmailChangeConfirmation() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const confirmEmailChange = async (token: string) => {
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch(`${API_URL}/accounts/confirm-email-change/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token }),
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error('Email change confirmation failed');
      }

      setSuccess(true);
    } catch (err) {
      setError('Failed to confirm email change. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return { confirmEmailChange, isLoading, error, success };
}