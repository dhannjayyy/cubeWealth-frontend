const useLogin = (data) => {
  const loginHandler = async () => {
    try {
      let responseConverted;
      let response;
      response = await fetch(`${process.env.BACKEND_URI}/auth`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      responseConverted = await response.json();
      return [response.status, responseConverted.message];
    } catch (error) {
      console.error(error);
    }
  };

  return loginHandler();
};

export default useLogin;
