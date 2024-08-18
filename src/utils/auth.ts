export const fetchWithAuth = async (url: string, options = {}) => {
    const response = await fetch(url, {
      ...options,
      credentials: 'include', // Incluir cookies na requisição
    });
  
    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }
  
    return await response.json();
  };
  