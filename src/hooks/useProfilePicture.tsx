import { useState } from 'react';
import { useApiBase } from './useApiBase';

const API_URL = 'http://127.0.0.1:8000/api';

interface User {
  profile_picture: string | null;
  // Add other user properties here
}

export function useProfilePicture() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const { data: user, mutate } = useApiBase<User>('/accounts/token/get-user-session/');

  const updateProfilePicture = async (file: File) => {
    setIsLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append('profile_picture', file);

    try {
      const response = await fetch(`${API_URL}/accounts/update-profile-picture/`, {
        method: 'PATCH',
        body: formData,
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error('Failed to update profile picture');
      }

      await mutate();
    } catch (err) {
      setError('Failed to update profile picture. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const deleteProfilePicture = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_URL}/accounts/delete-profile-picture/`, {
        method: 'PATCH',
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error('Failed to delete profile picture');
      }

      await mutate();
    } catch (err) {
      setError('Failed to delete profile picture. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    updateProfilePicture,
    deleteProfilePicture,
    profilePicture: user?.profile_picture,
    isLoading,
    error
  };
}