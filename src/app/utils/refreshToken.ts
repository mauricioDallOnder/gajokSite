export async function refreshAccessToken() {
    const refreshTokenUrl = `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${process.env.ACESS_TOKEN_PERMANENT}`;
    try {
      const response = await fetch(refreshTokenUrl);
      const responseBody = await response.text(); // Captura a resposta como texto
  
      try {
        const data = JSON.parse(responseBody); // Tenta analisar o texto como JSON
        if (data.error) throw new Error(data.error.message);
  
        process.env.ACESS_TOKEN_PERMANENT = data.access_token;
        return data.access_token;
      } catch (error) {
        // Se houver erro ao analisar o JSON, imprime a resposta bruta
        console.error('Failed to parse response as JSON:', responseBody);
        throw error;
      }
    } catch (error) {
      console.error('Failed to refresh access token:', error);
      throw error;
    }
  }
  