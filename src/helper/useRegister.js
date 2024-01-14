
const useRegister = (data) => {
  const registerHandler = async () => {
    try {
      let responseConverted;
      let response;
      response = await fetch(`${process.env.BACKEND_URI}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      responseConverted = await response.json();
      return [response.status, responseConverted.message];
    } catch (error) {
      console.error(error);
    }
  };
  return registerHandler();
};

export default useRegister;
