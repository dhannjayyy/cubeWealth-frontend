const useRefreshToken = () => {
  const verifyAccessToken = async () => {
    try {
      let responseConverted;
      let response;
      response = await fetch(`${process.env.BACKEND_URI}/refresh`, {
        method: "GET",
        credentials: "include",
      });
      responseConverted = await response.json();
      return [
        response.status,
        responseConverted.message,
        responseConverted.email,
      ];
    } catch (error) {
      console.error(error);
    }
  };
  return verifyAccessToken;
};

export default useRefreshToken;
