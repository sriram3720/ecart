import jwtDecode from 'jwt-decode';

export const getAuthHeaders = () => {
    const token = localStorage.getItem('token');
    if (token) {
      return { Authorization: `Bearer ${token}` };
    }
    return {};
  };

export const isAuthenticated = () => {
    // Check if the JWT token exists in local storage
    console.log('auet',localStorage.getItem('token'))
    const token = localStorage.getItem('token');
  
    if (token) {
      try {
        // Decode the token to get the expiration date
        const { exp } = jwtDecode(token);
  
        // Check if the token is expired
        if (Date.now() >= exp * 1000) {
          // Token is expired
          return false;
        }
  
        // Token is valid
        return true;
      } catch (error) {
        // Invalid token
        return false;
      }
    }
  
    // Token does not exist
    return false;
  };